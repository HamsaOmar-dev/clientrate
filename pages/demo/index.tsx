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
        {/* <iframe 
          width="100%" 
          height={isMobile ? "350" : isTablet ? "450" : "650"}
          src="https://www.youtube.com/embed/uufCbCWfsgA" 
          title="ClientRate" 
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe> */}
        <div
          style={{ position: "relative", paddingBottom: "48.4375%", height: 0 }}
        >
          <iframe
            src="https://www.loom.com/embed/ef86d6f658f84d4f88efc51de322ed0a"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </ContainerWrapper>
      <LandingFooter notLandingPage={true} />
    </>
  );
};

export default Demo;
