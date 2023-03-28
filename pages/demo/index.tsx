import ContainerWrapper from "@/components/ContainerWrapper";
import { AppHeader } from "@/components/Header";
import LandingFooter from "@/components/LandingFooter";
import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const Demo = () => {
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width: 770px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <AppHeader
        scrollIntoView1={() => {
          router.push("/#features");
        }}
        scrollIntoView2={() => {
          router.push("/#pricing");
        }}
      />
      <ContainerWrapper>
        <Title py="2rem">Demo</Title>
        <iframe
          width="100%"
          height={isMobile ? "350" : isTablet ? "450" : "650"}
          src="https://www.youtube.com/embed/9y927xiDtJo"
          title="Moodcaster  - Software Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </ContainerWrapper>
      <LandingFooter notLandingPage={true} />
    </>
  );
};

export default Demo;
