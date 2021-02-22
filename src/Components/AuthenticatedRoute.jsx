import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Authenticationservice from "./Authenticationservice.js"
class AuthenticatedRoute extends Component
{
    render()
    {
    
            if(Authenticationservice.isUserloggedin())
            {
               return  <Route {...this.props}/>
            }
            else{
                return <Redirect to="/login"/>
            }
    
    }
}
export default AuthenticatedRoute;