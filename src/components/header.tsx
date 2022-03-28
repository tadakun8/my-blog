import { Box, Heading, HStack, Spacer, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box mx={50} my={5}>
      <HStack>
        <Heading>
          <NextLink href={"/"} passHref>
            <Link textDecoration="none" _hover={{ textDecoration: "none" }} _focus={{ outline: "none" }}>
              tadakun8&apos;s blog
            </Link>
          </NextLink>
        </Heading>
        <Spacer />
        <HStack>
          <Box>menu01</Box>
          <Spacer />
          <Box>menu02</Box>
          <Spacer />
          <Box>menu03</Box>
          <Spacer />
          <Box>menu04</Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
