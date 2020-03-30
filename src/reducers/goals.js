import { ADD_GOAL, REMOVE_GOAL } from '../actions/goals';

export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);

    case RECEIVE_DATA:
      return action.goals;

    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);

    default:
      return state;
  }
}
