import PostList from './PostList.js';
import useFetch from './useFetch.js';

const Home = () => {
  const {data: posts, isLoading, error} = useFetch('http://localhost:8000/posts');

  return (
    <div className="home">
      {error && <div>Could not load data</div>}
      {isLoading && <div>Loading...</div>}
      {posts && <PostList title="All Posts" posts={posts} />}
    </div>
  );
}

export default Home;

