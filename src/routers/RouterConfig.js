import React from 'react';
import {Route} from 'react-router-dom';
import login from '../containers/login';
import register from '../containers/register';
import Home from '../containers/home';

class RouterConfig extends React.Component{
render(){
    return(
        <div>
             <Route path="/login"  component={login}/>
             <Route path="/register" component={register}/>
             <Route path="/" component={Home}/>
        </div>
    )
}
}
export default RouterConfig;