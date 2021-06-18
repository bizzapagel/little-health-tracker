import {useState} from 'react';
import PostList from './PostList.js';

const Home = () => {
  const [posts, setPosts] = useState([
    { title: 'My first post post', body: 'Lorem ipsum...', author: 'Frank', id: 1 },
    { title: 'My second post post', body: 'Lorem ipsum...', author: 'Carl', id: 2 },
    { title: 'My third post post', body: 'Lorem ipsum...', author: 'Pecky', id: 3 }
  ]);

  return (
    <div className="home">
      <PostList title="All Posts" posts={posts} />
      <PostList title="Frank's Posts" posts={posts.filter((post) => post.author === 'Frank')} />
    </div>
  );
}

export default Home;

