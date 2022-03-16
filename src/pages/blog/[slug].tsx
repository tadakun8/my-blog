import { NextPage, InferGetStaticPropsType } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import "prismjs/themes/prism-okaidia.css";
import { Flex, Heading } from "@chakra-ui/react";

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
    <Flex h={100} justify="center" align="center">
      <Heading as="h1" size="1.5xl">
        {post.title}
      </Heading>
    </Flex>
    <article>
      <p>{post.date}</p>
      <ul>
        {post.tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <section>
        {/* ここでdangerouslySetInnerHTMLを使ってHTMLタグを出力する */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </article>
  </>
);

export default Post;
