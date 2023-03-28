import { Container, Flex, Paper, Grid, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import AuthImage from "../../public/auth-image.jpg";
import AuthImageTablet from "../../public/auth-image-tablet.png";
import AuthImageMobile from "../../public/auth-image-mobile.png";
import LogoImage from "../../public/client-rate-logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery("(max-width: 844px)");
  const isMobile = useMediaQuery("(max-width: 770px)");

  return (
    <Container size={1200} h="100%" py="xl">
      <Grid h={"100%"} align="center" justify="center">
        <Grid.Col md={12} hidden={!isTablet ? true : false}>
          <Center>
            <Image
              // width={300}
              style={{
                height: "40vh",
                width: "100%",
              }}
              src={
                isTablet
                  ? AuthImageTablet
                  : isMobile
                  ? AuthImageMobile
                  : AuthImage
              }
              alt="Stock Image of a cushion"
            />
          </Center>
        </Grid.Col>
        <Grid.Col sm={isTablet ? 12 : 6}>
          <Flex
            direction={"column"}
            align="center"
            justify={"center"}
            h={"100%"}
            gap={40}
          >
            <Image
              src={LogoImage}
              alt="Client Rate Logo"
              width={isTablet ? 250 : 300}
            />
            {children}
          </Flex>
        </Grid.Col>
        <Grid.Col sm={6} hidden={isTablet ? true : false}>
          <Image
            src={AuthImage}
            alt="Stock Image of a cushion"
            // height={700}
            style={{
              height: "100vh",
              width: "100%",
            }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Layout;
