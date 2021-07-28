import Navbar from './Navbar.js';
import Home from './Home.js';
import Create from './Create.js';
import PostDetails from './PostDetails.js';
import NotFound from './NotFound.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/"><Home /></Route>
						<Route exact path="/create"><Create /></Route>
						<Route exact path="/posts/:id"><PostDetails /></Route>
						<Route path="*"><NotFound /></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;

