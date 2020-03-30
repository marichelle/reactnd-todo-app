import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);

    case RECEIVE_DATA:
      return action.todos;

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      // Object.assign() allows us to return a new object with merged properties
      return state.map(todo =>
        todo.id === action.id
          ? Object.assign({}, todo, { complete: !todo.complete })
          : todo
      );

    default:
      return state;
  }
}
