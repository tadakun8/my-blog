import { Box, chakra, Flex, Link, useColorModeValue, Image } from "@chakra-ui/react";
import NextLink from "next/link";
interface blogCardProps {
  title: string;
  publishDate: string;
  tags: string[];
  slug: string;
}

// @see https://choc-ui.com/docs/elements/cards
const BlogCard = (props: blogCardProps) => {
  return (
    <Flex bg={useColorModeValue("#F9FAFB", "gray.600")} p={2} alignItems="center" justifyContent="center">
      <Box
        width="80%"
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            {props.publishDate}
          </chakra.span>
          <Box>
            {props.tags.map((tag) => (
              <Link
                mx={1}
                key={tag}
                px={3}
                py={1}
                bg="gray.600"
                color="gray.100"
                fontSize="sm"
                fontWeight="700"
                rounded="md"
                _hover={{ bg: "gray.500" }}
              >
                {tag}
              </Link>
            ))}
          </Box>
        </Flex>

        <Box mt={2}>
          <NextLink href={`blog/${props.slug}`} passHref>
            <Link
              fontSize="2xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"
              _hover={{
                color: useColorModeValue("gray.600", "gray.200"),
                textDecoration: "none",
              }}
              _focus={{ outline: "none" }}
            >
              {props.title}
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default BlogCard;
