import { NextResponse, NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const request = await req.json();
  if (request) {
    console.log(request);
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: request.amount * 100,
              product_data: {
                name: request.name,
                description: request.description,
              },
            },
            quantity: 1,
          },
        ],
        metadata: {
          userId: request.userId,
          productId: request.productId,
          credits: request.credits,
        },
        mode: "payment",
        success_url: process.env.BASE_URL,
        cancel_url: process.env.BASE_URL,
      });
      return NextResponse.json({ sessionId: session.id });
    } catch (error: any) {
      return NextResponse.json(error);
    }
  } else {
    return new NextResponse("Bad Request", {
      status: 400,
    });
  }
}
