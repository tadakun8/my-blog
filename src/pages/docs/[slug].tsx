import { NextPage, InferGetStaticPropsType } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import "prismjs/themes/prism-okaidia.css";

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
    <article>
      <h2>{post.title}</h2>
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
