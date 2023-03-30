import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { Notifications } from "@mantine/notifications";

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_SECRET}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS_SECRET}');
        `}
      </Script>
      <Head>
        <title>ClientRate</title>
        {/* <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
          rel="stylesheet"
        /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: "Satoshi, sans-serif",

          colors: {
            yellow: [
              "#FCC419",
              "#FCC419",
              "#FCC419",
              "#FCC419",
              "#FCC419",
              "#FCC419",
              "#FCC419",
              "#FAB005",
            ],
          },
          primaryColor: "yellow",
        }}
      >
        <Notifications position="top-right" />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  );
}
