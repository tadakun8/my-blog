import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../components/header";

import { withProse } from "@nikolovlazar/chakra-ui-prose";

const customeTheme = extendTheme(
  {},
  withProse({
    baseStyle: {
      // Refer to the <code> of github readme style
      code: {
        padding: "0.2em 0.4em",
        margin: 0,
        backgroundColor: "rgba(175,184,193,0.2)",
        fontWeight: "normal",
        borderRadius: "6px",
        _before: {
          content: '""',
        },
        _after: {
          content: '""',
        },
      },
    },
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Specify resetCSS to false to prevent @tailwindcss/typography css from disappearing
    <ChakraProvider theme={customeTheme}>
      {/* <Header /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
