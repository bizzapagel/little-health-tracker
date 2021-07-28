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
    this.props.addTodo(this.state);
    this.setState({
      title: ''
    });
  }

  render() { 
    return (
      <div className="form row">
        <div className="col s12 m6 l4">
          <form onSubmit={this.handleSubmit}>
            <label>Add new to-do</label>
            <input type="text" placeholder="Do this important thing" onChange={this.handleChange} value={this.state.title} />
          </form>
        </div>
      </div>
    );
  }
}
 
export default Form;
