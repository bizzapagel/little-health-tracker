import Navbar from './Navbar.js';
import Home from './Home.js';
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';
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
            <Route exact path="/posts/:id"><BlogDetails /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

