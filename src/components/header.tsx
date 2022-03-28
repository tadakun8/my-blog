import { Box, Heading, HStack, Spacer, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box mx={50} my={5}>
      <HStack spacing={10}>
        <Heading>
          <NextLink href={"/"} passHref>
            <Link textDecoration="none" _hover={{ textDecoration: "none" }} _focus={{ outline: "none" }}>
              {/* &apos; は ' を表す */}
              tadakun8&apos;s blog
            </Link>
          </NextLink>
        </Heading>
        <Spacer />
        <Box>menu01</Box>
        <Box>menu02</Box>
        <Box>menu03</Box>
        <Box>menu04</Box>
      </HStack>
    </Box>
  );
};

export default Header;
