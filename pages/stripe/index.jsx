 import axios from "axios";
import React, { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../../components/Checkout";
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const StripePaymentScreen = () => {
  // Create a client Secret for the payment intent
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("/api/stripe/create-payment-intent", {
        amount: 50 * 100,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Checkout />
        </Elements>
      )}
    </>
  );
};

export default StripePaymentScreen;
