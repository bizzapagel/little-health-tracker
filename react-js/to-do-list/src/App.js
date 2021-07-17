import React, {Component} from 'react';
import List from './List.js';

class App extends Component {
  state = {
    todos: [
      // {title: 'Take out trash', id: 1},
      // {title: 'Make rent payement', id: 2},
      // {title: 'Do the dishes', id: 3}
    ]
  }

  render() {
    return (
      <div className="app">
        <h1 className="center-align blue-text">To-Dos</h1>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
