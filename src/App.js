import React, { Component } from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="mainDiv">
      <div className="subDiv">
      <Router>
                <div>
                   <Switch>
                      <Route exact path='/Login' component={Login} />
                      <Route exact path='/' component={Signup} />
                      <Route exact path='/Home' component={Home}/>
                   </Switch>
                </div>
             </Router>
        </div>
     </div>
    );
  }
}

export default App;
