import {useState, useEffect} from 'react';
import PostList from './PostList.js';

const Home = () => {
  const [posts, setPosts] = useState([
    { title: 'My first post post', body: 'Lorem ipsum...', author: 'Frank', id: 1 },
    { title: 'My second post post', body: 'Lorem ipsum...', author: 'Carl', id: 2 },
    { title: 'My third post post', body: 'Lorem ipsum...', author: 'Pecky', id: 3 }
  ]);

	const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);

    // Rebuild the posts array
    // This changes the app's state
    setPosts(newPosts);
	}

  // Called whenever the app is re-rendered
  // This happens anytime the app's state is changed
  // Adding [] makes this run only on the first render
  // Addind "posts" to [] makes this run also when that state changes
  useEffect(() => {
    console.log('did it');
  }, []);

  return (
    <div className="home">
      <PostList title="All Posts" posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default Home;

