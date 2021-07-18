import React, {Component} from 'react';

class Form extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo
  }

  render() { 
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>Add new to-do</label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
 
export default Form;
