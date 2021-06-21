import {useState, useEffect} from 'react';
import PostList from './PostList.js';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Called whenever the app is re-rendered
  // This happens anytime the app's state is changed
  // Adding [] makes this run only on the first render
  // Addind "posts" to [] makes this run also when that state changes
  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="home">
      {/* If posts has been set, call PostList */}
      {posts && <PostList title="All Posts" posts={posts} />}
    </div>
  );
}

export default Home;

