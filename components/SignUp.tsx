import { Flex, Text, Title, Stack, Anchor } from "@mantine/core";
import React from "react";
import Button from "./Button";
import GoogleButton from "./GoogleButton";
import Router from "next/router";

const SignUp = () => {
  const router = Router;

  const handleLoginClick = () => {
    router.push("/auth/sign-in");
  };

  return (
    <Flex direction={"column"} align={"center"} gap={64}>
      <Stack align={"center"}>
        <Title size={64}>Hi, Welcome</Title>
        <Text size={24} fw={500} color={"gray.6"}>
          Please Create your Account First
        </Text>
      </Stack>
      <GoogleButton />
      <Text>
        Have an account?{" "}
        <Anchor color={"black"} fw="bold" onClick={handleLoginClick}>
          Login
        </Anchor>
      </Text>
    </Flex>
  );
};

export default SignUp;
