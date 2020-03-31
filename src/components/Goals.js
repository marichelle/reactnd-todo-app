import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

class Goals extends React.Component {
  addGoal = e => {
    e.preventDefault();

    // pass a callback in order to invoke the same "clear form field"
    // functionality within the handleAddGoal() action creator
    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ''))
    );
  };

  handleRemoveItem = item => {
    this.props.dispatch(handleDeleteGoal(item));
  };

  render() {
    return (
      <div>
        <h1>Goals</h1>
        {/* Uncontrolled Component */}
        <input
          type="text"
          placeholder="Add goal"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addGoal}>Add Goal</button>
        <List items={this.props.goals} onRemoveItem={this.handleRemoveItem} />
      </div>
    );
  }
}

// Whenever we import this component, we
// should get back the connected component
export default connect(state => ({
  goals: state.goals
}))(Goals);
