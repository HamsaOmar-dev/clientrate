import axios from "axios";
import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../components/Checkout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoaderWrapper } from "@/components/LoaderWrapper";
import { Title } from "@mantine/core";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY as string);

const Stripe = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("TD1", session);
    if (session) {
      axios
        .post("/api/user/find-user", {
          email: session?.user?.email,
        })
        .then((res) => {
          if (res.data?.data?.stripePaid) {
            router.push("/dashboard");
          } else {
            console.log("T-DEBUG", res.data);
            // router.push("/stripe");
            router.push("https://buy.stripe.com/00g3eF6MKaqd5FK8ww");
          }
        })
        .catch((err) => {
          console.log("T-DEBUG", err);
          alert(err.response.data.message);
        });
    } else {
      router.replace("/auth/sign-in");
    }
  }, []);

  return (
    <Stack
      align="center"
      pt="200px"
    >
      {/* <Title align="center">{`PLEASE WAIT WHILE WE CHECK YOUR SUBSCRIPTION`}</Title> */}
      <LoaderWrapper loading={true}>
        <div style={{ height: "30vh" }}></div>
      </LoaderWrapper>
    </Stack>
  );
};

export default Stripe;
