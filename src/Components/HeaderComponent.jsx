import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch,Link}from 'react-router-dom';
import Authenticationservice from "./Authenticationservice.js";
import  '../bootstrap.css';
import '../App.css';
import { withRouter } from 'react-router';
class Header extends Component
{    
  render()
  {   const isUserloggedIN=Authenticationservice.isUserloggedin();
 
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
       <div className="navbar-brand"><a href="https://www.google.com/">Google.com</a></div>
       <ul className="navbar-nav">
         {isUserloggedIN && <li className="nav-link"><Link to="/welcome/Akash Bhaiya">Home</Link></li>}
         {isUserloggedIN && <li className="nav-link"><Link to="/todo">Todos</Link></li>}
         </ul>
         <ul className="navbar-nav navbar-collapse justify-content-end">
         {!isUserloggedIN &&<li className="nav-link"><Link to="/login">Login</Link></li>}
         {isUserloggedIN && <li className="nav-link"><Link to="/logout" onClick={Authenticationservice.logout}>Logout</Link></li>}
         </ul >
        </nav>
      </header>
       


    );
  }
}
export default withRouter(Header);