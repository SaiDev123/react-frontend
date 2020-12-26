import React, { Component } from 'react';
import Register from '../containers/register';
import Login from '../containers/login';

export default class App extends Component {
  render() {
    return (
      <div>

         {/* <Register/> */}

         <Login/>

      </div>
    );
  }
}
