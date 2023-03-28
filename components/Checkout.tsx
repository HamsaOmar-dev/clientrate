import React from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "./Button";
import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formStyles: {
    display: "flex",
    width: "500px",
    flexDirection: "column",
  },
};

const Checkout = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();

  //useEffect to navigate to dashboard if user is logged in

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      redirect: "if_required",
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        alert(error.message);
      } else {
        alert("An unexpected error occured.");
      }
    } else {
      // call the stripe paid api
      await axios.post("/api/user/stripe-paid", {
        email: session?.user?.email,
      });
      router.push("/dashboard");
    }
  };

  return (
    <main style={styles.container}>
      <form
        onSubmit={handleSubmit}
        style={styles.formStyles as React.CSSProperties}
      >
        <PaymentElement />
        <Button
          type="submit"
          variant={"filled"}
          disabled={!stripe}
          my={20}
        >
          Pay Now
        </Button>
      </form>
    </main>
  );
};

export default Checkout;
