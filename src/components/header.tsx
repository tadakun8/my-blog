import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Spacer, Link, useColorModeValue, IconButton, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";

const Header = () => {
  const [isDisplayMenuList, setIsDisplayMenuList] = useState(false);

  return (
    <VStack width="100%">
      <HStack width="80%" height="5rem">
        <Heading>
          <NextLink href={"/"} passHref>
            <Link textDecoration="none" _hover={{ textDecoration: "none" }} _focus={{ outline: "none" }}>
              {/* &apos; は ' を表す */}
              tadakun8&apos;s blog
            </Link>
          </NextLink>
        </Heading>

        <Spacer />

        {/* Show button for mobile only */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none"]}
          onClick={() => setIsDisplayMenuList(!isDisplayMenuList)}
        />

        {/* Show menu list only on desktop */}
        <HStack spacing={8} display={["none", "none", "flex"]}>
          <Box>menu01</Box>
          <Box>menu02</Box>
          <Box>menu03</Box>
          <Box>menu04</Box>
        </HStack>
      </HStack>

      <HStack spacing={5} display={isDisplayMenuList ? "flex" : "none"}>
        <Box>menu01</Box>
        <Box>menu02</Box>
        <Box>menu03</Box>
        <Box>menu04</Box>
      </HStack>
    </VStack>
  );
};

export default Header;
