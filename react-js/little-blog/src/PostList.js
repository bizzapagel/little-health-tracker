const PostList = ({title, posts, deletePost}) => {

	return (
		<div className="post-list">
			<h2>{title}</h2>
			{posts.map((post) => (
				<div className="post-preview" key={post.id}>
					<h2>{post.title}</h2>
					<p>Written by {post.author}</p>
					<button onClick={() => deletePost(post.id)}>Delete Post</button>
				</div>
			))}
		</div>
	);
}
 
export default PostList;

