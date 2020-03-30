import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// action creators

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

// asynchronous action creators

export function handleAddGoal(name, cb) {
  return dispatch =>
    API.saveGoal(name)
      .then(goal => {
        cb();
        dispatch(addGoal(goal));
      })
      .catch(() => alert('An error occurred. Try again.'));
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert('An error occurred. Try again.');
    });
  };
}
