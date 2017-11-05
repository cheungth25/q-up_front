import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavMenu from './components/NavMenu'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
      <NavMenu/>
      {/* <Route exact path="/" component={(props)=>(<App route={props} />)} /> */}
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
