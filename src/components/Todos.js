import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos';

class Todos extends React.Component {
  handleAddItem = e => {
    e.preventDefault();

    // pass a callback in order to invoke the same "clear form field"
    // functionality within the handleSaveTodo() action creator
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );
  };

  handleRemoveItem = item => {
    this.props.dispatch(handleDeleteTodo(item));
  };

  handleToggleItem = item => {
    this.props.dispatch(handleToggle(item.id));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {/* Uncontrolled Component */}
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.handleAddItem}>Add Todo</button>
        <List
          items={this.props.todos}
          onRemoveItem={this.handleRemoveItem}
          onToggleItem={this.handleToggleItem}
        />
      </div>
    );
  }
}

// Whenever we import this component, we
// should get back the connected component
export default connect(state => ({
  todos: state.todos
}))(Todos);
