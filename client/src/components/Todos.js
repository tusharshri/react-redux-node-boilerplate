import React, { Component } from 'react';
import TodoList from '../containers/todo-list'
import ActiveTodo from '../containers/active-todo'
import Shortlist from '../containers/shortlist'

export default class Todos extends Component {
  render() {
    return (
      <div>
        <ActiveTodo />
        <h3>Shortlist</h3>
        <Shortlist />
        <h3>Todos List</h3>
        <TodoList />
      </div>
    );
  }
}
