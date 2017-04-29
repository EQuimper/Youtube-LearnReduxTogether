import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo, completedTodo, deletedTodo, deletedAllCompletedTodo } from './actions/todos';
import './App.css';

class App extends Component {
  state = {
    text: '',
  };

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({
      text: '',
    });
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _handleCompleted = id => {
    this.props.completedTodo(id);
  };

  _handleDeleted = id => {
    this.props.deletedTodo(id);
  };

  _handleDeletedAllCompleted = () => {
    this.props.deletedAllCompletedTodo();
  }

  render() {
    return (
      <div className="App">
        <form className="App-intro" onSubmit={this._handleSubmit}>
          <input
            value={this.state.text}
            onChange={this._handleChange}
            type="text"
            name="text"
            placeholder="Create a todo..."
          />
        </form>
        <br />
        {this.props.todos.map(({ text, id, completed }) => (
          <div key={id}>
            {text}
            <input
              onChange={() => this._handleCompleted(id)}
              type="checkbox"
              value={completed}
            />
            <button onClick={() => this._handleDeleted(id)}>Delete Me</button>
          </div>
        ))}
        <br />
        <hr />
        <br />
        <button onClick={this._handleDeletedAllCompleted}>Delete All Completed</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  { createTodo, completedTodo, deletedTodo, deletedAllCompletedTodo },
)(App);
