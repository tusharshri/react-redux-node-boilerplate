import React, { Component } from 'react';

export default class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [{
          id: 1,
          name: "Tushar",
          description: "Coder"
        },
        {
          id: 2,
          name: "Neha",
          description: "Pokemon"
        }
      ],
      selectedUser: {}
    }
  }

  getOnClick(user){
    this.setState({selectedUser: user});
  }

  renderUsers(){
    return this.state.users.map(user=>{
      return (
        <li key={user.id} onClick={()=>this.getOnClick(user)}>{user.name}</li>
      )
    })
  }
  renderSelected(){
    if(this.state.selectedUser.name)
      return (
        <div>
          <p>Name: {this.state.selectedUser.name}</p>
          <p>Description: {this.state.selectedUser.description}</p>
        </div>
      );
    return (
      <h4>Select an user first</h4>
    )
  }
  render() {
    return (
      <div>
        {this.renderUsers()}
        <hr />
        <h3>Selected User</h3>
        {this.renderSelected()}
      </div>
    );
  }
}
