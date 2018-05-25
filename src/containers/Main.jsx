import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Client, Freelancer, Login, Register } from '../index';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/client' component={Client}/>
          <Route path='/freelancer' component={Freelancer}/>
        </Switch>
      </main>
    );
  }
}

export default Main;