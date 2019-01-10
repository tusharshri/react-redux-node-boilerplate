import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import {bindActionCreators} from 'redux';
import {shortlistItem} from '../actions/active-todo'

class ActiveTodo extends Component {
  render() {
    if(!_.isEmpty(this.props.activeTodo)){
      return (
        <div>
          <h2>This item is active:</h2>
          <p>
            {this.props.activeTodo.title}
          </p>
          <button onClick={()=>this.props.shortlistItem(this.props.activeTodo)}>Add to shortlist</button>
        </div>
      );
    }
    return <h3>Please select an item</h3>;
  }
}

function mapStateToProps(state){
  return {
    activeTodo: state.activeTodo
  };
}

function matchDispathcToProps(dispatch){
  return bindActionCreators({shortlistItem: shortlistItem}, dispatch)
}

export default connect(mapStateToProps, matchDispathcToProps)(ActiveTodo);