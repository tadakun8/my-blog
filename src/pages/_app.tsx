import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Specify resetCSS to false to prevent @tailwindcss/typography css from disappearing
    <ChakraProvider resetCSS={false}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
