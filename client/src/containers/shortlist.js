import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { loadShortlist, removeShortlist, updateShortlist } from '../actions/shortlist';
import ShortlistItem from './shortlistItem';

class Shortlist extends Component {
  componentDidMount(){
    this.props.loadShortlist();
  }

  createListItems(){
    return this.props.shortlist.map((item)=>{
      return (
        <ShortlistItem key={item._id} keyName={item._id} removeFunc={()=>this.props.removeShortlist(item)} onUpdateFunc={(newTitle)=>this.props.updateShortlist(item, newTitle)}>{item.title}</ShortlistItem>
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
    shortlist: state.shortlist
  };
}

function matchDispathcToProps(dispatch){
  return bindActionCreators({loadShortlist: loadShortlist, removeShortlist: removeShortlist, updateShortlist: updateShortlist}, dispatch)
}

export default connect(mapStateToProps, matchDispathcToProps)(Shortlist);