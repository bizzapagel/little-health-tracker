import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const PostDetails = () => {
	const {id} = useParams();
	const {data: post, isLoading, error} = useFetch('http://localhost:8000/posts/' + id);
	const history = useHistory();

	const deletePost = () => {
		fetch('http://localhost:8000/posts/' + post.id, {
			method: 'DELETE'
		}).then(() => {
			history.push('/');
		})
	}

	return (
		<div className="post-details">
			{error && <div>Could not load data</div>}
			{isLoading && <div>Loading...</div>}
			{post && (
				<article>
					<h2>{post.title}</h2>
					<p className="author">By {post.author}</p>
					<p className="body">{post.body}</p>
					<button onClick={deletePost}>Delete</button>
				</article>
			)}
		</div>
	);
}
 
export default PostDetails;