import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { loadTodos, itemClicked } from '../actions/todos';

class TodoList extends Component {
  componentDidMount(){
    this.props.loadTodos();
  }

  createListItems(){
    return this.props.todos.map((item)=>{
      return (
        <li onClick={()=>this.props.itemClicked(item)} key={item.id}>{item.title}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    todos: state.todos
  };
}

function matchDispathcToProps(dispatch){
  return bindActionCreators({loadTodos: loadTodos, itemClicked: itemClicked}, dispatch)
}

export default connect(mapStateToProps, matchDispathcToProps)(TodoList);