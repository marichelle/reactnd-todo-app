import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

// asynchronous action creators

export function handleAddTodo(name, cb) {
  return dispatch =>
    API.saveTodo(name)
      .then(todo => {
        cb();
        dispatch(addTodo(todo));
      })
      .catch(() => alert('An error occurred. Try again.'));
}

export function handleDeleteTodo(todo) {
  // return a function that returns an object
  // instead of returning an object directly!
  return dispatch => {
    // optimistic update
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id).catch(() => {
      // revert if update fails
      alert('An error occurred. Try again.');
      dispatch(addTodo(todo));
    });
  };
}

export function handleToggle(id) {
  return dispatch => {
    // optimistic update
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(() => {
      // revert if update fails
      dispatch(toggleTodo(id));
      alert('An error occurred. Try again.');
    });
  };
}
