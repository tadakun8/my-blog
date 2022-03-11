import { NextPage, InferGetStaticPropsType } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/api";

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

  return {
    props: { post },
  };
};

const Post: NextPage<Props> = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.date}</p>
    <ul>
      {post.tags?.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
    <section>
      <p>{post.content}</p>
    </section>
  </article>
);

export default Post;
