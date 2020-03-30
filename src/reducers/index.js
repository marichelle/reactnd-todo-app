import { combineReducers } from 'redux';

import goals from './goals';
import todos from './todos';
import loading from './loading';

export default combineReducers({ goals, todos, loading });
