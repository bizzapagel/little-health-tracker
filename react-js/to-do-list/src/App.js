import React, {Component} from 'react';
import List from './List.js';
import Form from './Form.js';

class App extends Component {
  state = {
    todos: [
      {title: 'Take out trash', id: 1},
      {title: 'Make rent payement', id: 2},
      {title: 'Do the dishes', id: 3}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <h1 className="center-align blue-text">To-Do</h1>
          <Form addTodo={this.addTodo} />
          <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
