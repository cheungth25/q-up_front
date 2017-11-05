import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {

  displayPortal = () => {


    return(
      <Menu.Menu position='right'>

      </Menu.Menu>
    )
  }

  render() {
    return (
      <div className="App">
        <Menu attached='top'>
          {this.displayPortal()}
        </Menu>
      </div>
    );
  }
}

export default App;
