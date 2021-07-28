import {useState} from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('frank');
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const submitForm = (e) => {
		e.preventDefault();
		const post = {title, body, author};

		setIsLoading(true);

		fetch('http://localhost:8000/posts', {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(post)
		}).then(() => {
			setIsLoading(false);
			history.push('/');
		})
	}

	return (
		<div className="create">
			<h2>New Post</h2>

			<form onSubmit={submitForm}>
				<label>Post title:</label>
				<input
					required
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Post body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>

				<label>Post author:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="frank">Frank</option>
					<option value="carl">Carl</option>
					<option value="pecky">Pecky</option>
				</select>

				{isLoading && <button disabled>Creating Post...</button>}
				{!isLoading && <button>Create Post</button>}
			</form>
		</div>
	);
}

export default Create;