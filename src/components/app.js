import React, { Component } from 'react';
import Register from '../containers/register';
import Login from '../containers/login';
import {HashRouter} from 'react-router-dom';
import Header from './header';
import RouterConfig from '../routers/RouterConfig';

export default class App extends Component {
  render() {
    return (
      <div>

         {/* <Register/> */}

         {/* <Login/> */}

         <HashRouter>

           <Header/>

           <RouterConfig/>

           </HashRouter>

      </div>
    );
  }
}
