import React, { Component } from 'react'

export default class ShortlistItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      editingEnabled: false
    }
  }

  enableEditing = () => {
    this.setState({editingEnabled: true})
  }

  submitFormItem = (e) => {
    e.preventDefault();
    this.setState({editingEnabled: false})
    let value = this.refs.title.value;
    this.props.onUpdateFunc(value);
  }

  renderNormal(){
    return (
      <div>
        <li key={this.props.keyName}>
          {this.props.children}
          <button onClick={this.enableEditing}>Edit</button>
          <button onClick={this.props.removeFunc}>Remove</button>
        </li>
      </div>
    )
  }

  renderForm(){
    return(
      <form onClick={this.submitFormItem}>
        <input ref="title" defaultValue={this.props.children}/>
        <button type="submit">Save</button>
      </form>
    )
  }

  render() {
    if(this.state.editingEnabled){
      return this.renderForm();
    }
    return this.renderNormal();
  }
}
