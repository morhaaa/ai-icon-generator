import Stripe from "stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import User from "@/model/user";
import Transaction from "@/model/transaction";
import { connect } from "@/utilities/db";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  await connect();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const { userId, productId, credits } = session?.metadata!;

  if (!userId) {
    return new NextResponse("User id is required", { status: 400 });
  }
  if (!productId) {
    return new NextResponse("Product id is required", { status: 400 });
  }
  if (!credits) {
    return new NextResponse("Total credits are required", { status: 400 });
  }
  const user = await User.findById(userId);

  if (event.type === "checkout.session.completed") {
    await Transaction.create({
      userId: userId,
      productId: productId,
      transactionId: session.id,
      date: new Date(),
    });

    user.balance = user.balance + Number(credits);

    await user.save();
  }

  return new NextResponse(null, { status: 200 });
}
