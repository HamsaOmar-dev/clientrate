import { Center, Group, Paper, Text } from "@mantine/core";
import { Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import backgroundImage from "../public/background.png";
import Button from "./Button";
import ContainerWrapper from "./ContainerWrapper";

interface LandingFooterProps {
  notLandingPage?: boolean;
}
const LandingFooter = ({ notLandingPage = false }: LandingFooterProps) => {
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div
      style={{
        paddingTop: notLandingPage ? "4rem" : isMobile ? "14rem" : "20rem",
        width: "100%",
        // height: "100%",
        position: "relative",
      }}
    >
      <Paper
        radius={"20px 20px 0 0"}
        style={{
          backgroundColor: "black",
          width: "100%",
          height: isMobile ? (notLandingPage ? "120px" : "150px") : notLandingPage ? "6rem" : "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!notLandingPage && (
          <ContainerWrapper
            style={{
              position: "absolute",
              bottom: 100,
            }}
          >
            <Paper
              radius="xl"
              p={isMobile ? 20 : 60}
              style={{ backgroundImage: `url(${backgroundImage.src})` }}
            >
              <ContainerWrapper size={"sm"}>
                <Text
                  tt="uppercase"
                  align="center"
                  size={isMobile ? 20 : 40}
                  weight={500}
                >
                  {"30 DAY MONEY BACK GUARANTEE"}
                </Text>
              </ContainerWrapper>
              <Space h="xs" />
              <Text
                align="center"
                size={isMobile ? 12 : 20}
              >
                Our money back guarantee is designed to give you peace of mind and to ensure that you feel confident and secure when trying our service
              </Text>
              <Center>
                <Button
                  mt="lg"
                  size="xl"
                  style={{
                    padding: "0.5rem 3rem",
                  }}
                  variant={"filled"}
                  onClick={() => {
                    router.push("/auth/sign-up");
                  }}
                >
                  Get Started
                </Button>
              </Center>
            </Paper>
          </ContainerWrapper>
        )}
        <Group
          style={{
            position: "absolute",
            bottom: isTablet ? 10 : 40,
          }}
          position="center"
        >
          <Text color="white">Copyright @ ClientRate 2023</Text>
          <Space w={40} />
          <Text
            color="dimmed"
            align="center"
          >
            If you have any questions or concerns email us at support@clientrate.co
          </Text>
        </Group>
      </Paper>
    </div>
  );
};

export default LandingFooter;
