import Button from "./Button";
import { Text } from "@mantine/core";
import Image from "next/image";
import React, { useEffect } from "react";
import GoogleLogo from "../public/google-logo.png";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import axios from "axios";

const GoogleButton = () => {
  const { data: session, status } = useSession();

  const router = Router;

  const handleGoogleClick = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <Button
      w={"100%"}
      h={46}
      onClick={handleGoogleClick}
      variant="filled"
    >
      <Image
        src={GoogleLogo}
        alt="Google Logo"
        width={24}
        height={24}
      />
      <Text
        pl="lg"
        color="dark"
      >
        Continue with Google
      </Text>
    </Button>
  );
};

export default GoogleButton;
