import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import TodoComponents from "./Components/TodoComponent";
import {BrowserRouter as Router,Route, Switch,Link}from 'react-router-dom';
import  './bootstrap.css';
import LoginComponent from "./Components/LoginComponent";
import LogoutComponents from "./Components/LogoutComponent";
import Authenticationservice from "./Components/Authenticationservice.js";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import ErrorComponent from "./Components/ErrorComponent";
import Header from "./Components/HeaderComponent";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import UpdatetodoComponents from "./Components/UpdatetodoComponents";
class App extends Component
 {  
   render()
 {

  return (
         <div className="App" >
           <Router>
             <>
             <Header/>
             <Switch>
             <Route path="/" exact component={LoginComponent}/>
             <Route path="/login" component={LoginComponent}/>
             <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
             <AuthenticatedRoute path="/todo" component={TodoComponents}/>
             <AuthenticatedRoute path="/logout" component={LogoutComponents}/>
             <AuthenticatedRoute path="/todos/:id" component={UpdatetodoComponents}/>
             <Route component={ErrorComponent}/>
             </Switch>
             <Footer/>
             </>
           </Router>
           </div>
  );
   
  }
}




  export default App;