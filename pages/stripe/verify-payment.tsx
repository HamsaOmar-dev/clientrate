import axios from "axios";
import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoaderWrapper } from "@/components/LoaderWrapper";
import { Stack, Title } from "@mantine/core";
import { Center } from "@mantine/core";

const StripePaymentVerification = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const verify = () => {
    console.count("Use effect");
    if (session) {
      console.count("session exists");
      axios
        .post("/api/user/stripe-paid", {
          email: session?.user?.email,
        })
        .then((res) => {
          if (res.data?.data?.stripePaid) {
            router.push("/dashboard");
          } else {
            router.push("/auth/sign-in");
            // router.push("https://buy.stripe.com/00g3eF6MKaqd5FK8ww");
          }
        })
        .catch((err) => {
          console.log("T-DEBUG", err);
          alert(err.response.data.message);
        });
    }
  };
  useEffect(() => {
    verify();
  }, [session]);
  return (
    <Stack
      align="center"
      pt="200px"
    >
      {/* <Title align="center">{`PLEASE WAIT WHILE WE VERIFY YOUR PAYMENT`}</Title> */}
      <LoaderWrapper loading={true}>
        <div style={{ height: "30vh" }}></div>
      </LoaderWrapper>
    </Stack>
  );
};

export default StripePaymentVerification;
