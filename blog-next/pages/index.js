export default function Home({ posts }) {
  console.log("i am on the client");

  return (
    <div>
      {/* loop over the posts and show */}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.Title}</h2>
            <div>{post.User.username}</div>
          </div>
        ))}
    </div>
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
