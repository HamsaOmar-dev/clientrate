import { Flex, Text, Title, Stack, Anchor } from "@mantine/core";
import React from "react";
import Button from "./Button";
import GoogleButton from "./GoogleButton";

import Router from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const SignIn = () => {
  const isMobile = useMediaQuery("(max-width: 770px)");

  const router = Router;

  const handleSignUpClick = () => {
    router.push("/auth/sign-up");
  };
  return (
    <Flex direction={"column"} align={"center"} gap={64} py="xl">
      <Stack align={"center"}>
        <Title size={isMobile ? 30 : 50} align="center">
          Welcome Back
        </Title>
        <Text size={20} fw={500} color={"gray.6"}>
          Please Login First
        </Text>
      </Stack>
      <GoogleButton />
      <Text>
        Don&apos;t have an account?
        <Anchor color={"black"} fw="bold" onClick={handleSignUpClick}>
          Create Account
        </Anchor>
      </Text>
    </Flex>
  );
};

export default SignIn;
