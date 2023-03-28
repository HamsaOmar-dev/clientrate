import { Card, List, Text, Stack } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

import Button from "./Button";
import Router from "next/router";

interface PricingProps {
  checkList: string[];
  price: string;
}

const Pricing = ({ checkList, price }: PricingProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = Router;

  return (
    <Card
      p={isMobile ? 20 : 100}
      // px={40}
      radius="lg"
      withBorder
      style={{
        // width: ,
        // height: 600,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
      }}
    >
      <Stack spacing="xl">
        <div>
          <Text weight={500} size={isMobile ? 30 : 40} align="center">
            Pro
          </Text>
          <Text weight={500} size={isMobile ? 40 : 60} align="center">
            {price}
            <sup
              style={{
                fontSize: isMobile ? 20 : 30,
              }}
            >
              / Mo
            </sup>
          </Text>
        </div>
        <>
          <List
            spacing="xs"
            size="sm"
            center
            icon={<IconCheck color="orange" />}
          >
            {checkList?.map((item) => (
              <List.Item key={item}>
                <Text size={isMobile ? 15 : 25}>{item}</Text>
              </List.Item>
            ))}
          </List>
        </>
        <>
          <Button
            fullWidth={true}
            size="xl"
            style={{
              padding: "0.5rem 4rem",
            }}
            variant={"filled"}
            onClick={() => {
              router.push("/auth/sign-up");
            }}
          >
            Get Started
          </Button>
        </>
      </Stack>
    </Card>
  );
};

export default Pricing;
