import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Home({ posts }) {
  console.log("i am on the client");

  return (
    <Layout>
      <div>
        {/* loop over the posts and show */}
        {posts &&
          posts.map((post) => (
            <Link href={`/${post.Slug}`} key={post.id}>
              <a>
                <h2>{post.Title}</h2>
                <div>{post.User.username}</div>
              </a>
            </Link>
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // get posts from api
  const res = await fetch("http://localhost:1337/posts");

  const posts = await res.json();

  console.log(posts);

  return {
    props: { posts },
  };
}
