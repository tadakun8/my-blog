import { NextPage, InferGetStaticPropsType } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import "prismjs/themes/prism-okaidia.css";
import { Box, chakra, Flex, Heading, HStack, Link, Spacer, useColorModeValue, VStack } from "@chakra-ui/react";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ["slug", "title", "date", "tags", "content"]);

  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => (
  <>
    <Box px={[0, 20, 40]}>
      <VStack>
        <Heading as="h1" size="1.5xl">
          {post.title}
        </Heading>
        <Box width="100%">
          <HStack>
            <chakra.span fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
              {post.date}
            </chakra.span>
            <Spacer />
            <Box>
              {post.tags.map((tag) => (
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
          </HStack>
        </Box>
      </VStack>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </Box>
  </>
);

export default Post;
