import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../components/header";

import { withProse } from "@nikolovlazar/chakra-ui-prose";

const customeTheme = extendTheme({}, withProse());

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
