import {combineReducers} from 'redux';

import Todos from './todos';
import ActiveTodo from './active-todo';
import Shortlist from './shortlist';

const allReducers = combineReducers({
  todos: Todos,
  activeTodo: ActiveTodo,
  shortlist: Shortlist
});

export default allReducers;