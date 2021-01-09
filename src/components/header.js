import React from 'react';
import {NavLink} from 'react-router-dom';

export class Header extends React.Component{
    render()
        {
            return(
                <div>
                 
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 
  <NavLink className="navbar-brand" to="/login">Logo</NavLink>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
  </ul>
</nav>
                </div>
            )
        }
}
export  default Header;