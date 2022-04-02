import { NextPage, InferGetStaticPropsType } from "next";
import { Box } from "@chakra-ui/react";
import { getAllPosts } from "../lib/api";
import BlogCard from "../components/blogCard";
import Header from "../components/header";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);

  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => (
  <>
    {allPosts?.map((post) => (
      <BlogCard key={post.slug} title={post.title} publishDate={post.date} tags={post.tags} slug={post.slug} />
    ))}
  </>
);

export default Home;
