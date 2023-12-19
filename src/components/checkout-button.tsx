import React, { use } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { StoreType } from "@/containers/store";
import { useSelector } from "react-redux";

interface CheckOutButtonProps {
  plan: Plan;
}
export default function CheckOutButton({ plan }: CheckOutButtonProps) {
  const userId = useSelector((store: StoreType) => store.user.value?.id);

  const checkout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");
      const body = {
        productId: plan.id,
        userId: userId,
        amount: plan.price,
        name: plan.name,
        description: plan.description,
        credits: plan.credits,
      };
      const checkoutResponse = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await checkoutResponse.json();

      const { sessionId } = result;

      const stripeError = await stripe.redirectToCheckout({ sessionId });
      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => checkout()}
      className=" bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-2  w-full rounded-md border-2 border-slate-500"
    >
      <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-slate-300 to-slate-300">
        Next
      </p>
    </button>
  );
}
