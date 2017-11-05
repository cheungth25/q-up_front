import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import Signup from './Signup';
import Login from './Login';

class NavMenu extends Component {

  displayPortal(){
    const loggedIn = false
    return(
      loggedIn ? (
        <Menu.Menu position='right'>
          <Menu.Item name='logout'>
            Logout
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position='right'>
          <Menu.Item name='signup' >
            <Signup />
          </Menu.Item>
          <Menu.Item name='login'>
            <Login />
          </Menu.Item>
        </Menu.Menu>
      )
    )
  }

  render(){
    return(
      <Menu attached='top'>
        {this.displayPortal()}
      </Menu>
    )
  }
}

export default NavMenu;
