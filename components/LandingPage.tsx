import Button from "@/components/Button";
import { Carousel } from "@mantine/carousel";
import { Center, getStylesRef, Grid, Stack, Text } from "@mantine/core";
import { Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import calculator from "../public/calculator.png";
import landingPage1 from "../public/landingPage1.png";
import options from "../public/options.png";
import support from "../public/support.png";
import ContainerWrapper from "./ContainerWrapper";
import LandingFooter from "./LandingFooter";
import Pricing from "./Pricing";
import RatingReviewCards from "./RatingReviewCards";
import testimonial_1 from "../public/testimonail_image1.jpeg";
import testimonial_2 from "../public/testimonial_image2.jpeg";
import { useEffect } from "react";

const whyChooseUs = [
  {
    image: calculator,
    title: "Client Rate Calculator",
    description: "Our tool allows calculating your clients rate before sending it off for approval",
  },
  {
    image: options,
    title: "Flexible Options",
    description: "We offer a variety of options to help you manage your group home",
  },
  {
    image: support,
    title: "24/7 Support",
    description: "We are here to help you with any questions you may have",
  },
];
const testimonials = [
  {
    avatar: testimonial_1,
    name: "Muna Ahmed",
    rating: 5,
    description: "ClientRate is the best software that helps me understand if a client is worth it for me before I accept them",
  },
  {
    avatar: testimonial_2,
    name: "John Mitchells",
    rating: 5,
    description: "ClientRate’s software streamlines our operations and makes deciding to accept a client a simple business decision",
  },
];

interface LandingPageProps {
  targetRef1: React.RefObject<HTMLDivElement>;
  targetRef2: React.RefObject<HTMLDivElement>;
}

function LandingPage({ targetRef1, targetRef2 }: LandingPageProps) {
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isPictureHidden = useMediaQuery("(max-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    //check if the current url has a hash
    if (window.location.hash) {
      const hash = window.location.hash;
      switch (hash) {
        case "#features":
          targetRef1.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#pricing":
          targetRef2.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    }
  }, []);

  return (
    <>
      <ContainerWrapper>
        <Grid
          m={0}
          p={0}
        >
          <Grid.Col md={isMobile ? 12 : 6}>
            <Text
              mr={isMobile ? "auto" : "xl"}
              size={isTablet ? 40 : isMobile ? 30 : 60}
              weight={600}
              align={isMobile ? "center" : "left"}
            >
              Streamline Your Group Home, Get Rates for Interested Clients Now
            </Text>
            <Text
              size={isTablet ? 20 : isMobile ? 15 : 25}
              color="dimmed"
              align={isMobile ? "center" : "left"}
            >
              Say goodbye to accepting clients into your home without knowing what their approved rate will be
            </Text>
            <Button
              fullWidth={isMobile}
              mt="lg"
              size="xl"
              style={{
                padding: "0.5rem 4rem",
              }}
              variant={"filled"}
              onClick={() => {
                router.push("/auth/sign-up");
              }}
            >
              Calculate Your First Rate For Free
            </Button>
          </Grid.Col>
          <Grid.Col
            md={6}
            hidden={isPictureHidden}
            ml={isMobile ? "auto" : 0}
            pl={0}
            pb={0}
          >
            <Image
              src={landingPage1}
              alt="logo"
              height={isTablet ? 425 : 525}
            />
          </Grid.Col>
        </Grid>
        <div
          id="#features"
          ref={targetRef1}
        ></div>
        <Space />
        <ContainerWrapper
          mt={80}
          mb={40}
        >
          <Text
            tt="uppercase"
            align="center"
            size={30}
            weight="bold"
          >
            Why Choose us
          </Text>
          <Text
            align="center"
            mx="xl"
            color="dimmed"
            size={24}
            mt="sm"
          >
            {`We understand that managing a group home can be a complex and time
         consuming task. That's why we've made it easy for you to better
         understand and improve your bottom line`}
          </Text>
        </ContainerWrapper>
        <Grid>
          {whyChooseUs.map((item, index) => (
            <Grid.Col
              lg={4}
              key={item.title}
              pt={isMobile ? 40 : 0}
            >
              <Center mb={40}>
                <Image
                  src={item.image}
                  height={50}
                  alt="logo"
                />
              </Center>
              <Text
                align="center"
                size={25}
                weight="bold"
                my="md"
              >
                {item.title}
              </Text>
              <Text
                align="center"
                mx="xl"
                color="dimmed"
                size={20}
              >
                {item.description}
              </Text>
            </Grid.Col>
          ))}
        </Grid>
        <Center
          id="#pricing"
          my={100}
          ref={targetRef2}
        >
          <Stack>
            <Text
              tt="uppercase"
              align="center"
              size={30}
              weight="bold"
            >
              Pricing
            </Text>
            <Pricing
              price="$99"
              checkList={["Unlimited Rate Calculations", "Full Company Access", "24/7 Customer Support", "Tons of Features Updates"]}
            />
          </Stack>
        </Center>
        <ContainerWrapper mb={50}>
          <Text
            tt="uppercase"
            align="center"
            size={isMobile ? 20 : 30}
            weight="bold"
          >
            What Group Home owners Say About us
          </Text>
        </ContainerWrapper>
        <Carousel
          mx={isMobile ? 5 : 50}
          styles={{
            controls: {
              ref: getStylesRef("controls"),
              transition: "opacity 150ms ease",
              opacity: 0,
            },

            root: {
              "&:hover": {
                [`& .${getStylesRef("controls")}`]: {
                  opacity: 1,
                },
              },
            },
          }}
          withControls={false}
          slideGap="xl"
          loop
          slidesToScroll={isMobile ? 1 : 2}
          height={200}
          slideSize="50%"
          align={isMobile ? "center" : "start"}
          // no scroll when on desktop
          breakpoints={[{ maxWidth: "md", slideSize: "100%" }]}
        >
          {testimonials.map((item, index) => (
            <Carousel.Slide key={index}>
              <RatingReviewCards testimonials={item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </ContainerWrapper>
      <LandingFooter />
    </>
  );
}

export default LandingPage;
