import { NextPage, InferGetStaticPropsType } from "next";
import { Box } from "@chakra-ui/react";
import { getAllPosts } from "../lib/api";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);

  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => (
  <ul>
    {allPosts?.map((post) => (
      <Box key={post.slug} mt={10}>
        <li>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <ul>
            {post.tags?.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </li>
      </Box>
    ))}
  </ul>
);

export default Home;
