import React, { Component } from 'react';
import  '../bootstrap.css';
import {BrowserRouter as Router,Route, Switch,Link}from 'react-router-dom';
import '../App.css';
import Helloworldservice from '../Components/Api/todo/Helloworldservice.js';
class Welcome extends Component
{
  constructor(props)
  {
    super(props)
    this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this);
    this.state={
      welcomemess:""
    }
    this.handlesucessfullresponse=this.handlesucessfullresponse.bind(this);
  }
  retrieveWelcomeMessage()
{
 Helloworldservice.executeHelloWorldService().then(response=>this.handlesucessfullresponse(response));
}
handlesucessfullresponse(response)
{
   this.setState({welcomemess: response.data})
}
  render()
  {
    return(
      <>
        
          <h1>Welcome</h1>
            <div className="container">
          
                   <p>Welcome To Qwikcilver  {this.props.match.params.name}.
                   You can manage your todos <Link  to="/todo">here</Link> </p>
            </div>
            <div className="container">

            <p>Click Here To get Customized Welcome Message</p>
            <button onClick={this.retrieveWelcomeMessage} className="btn btn-succes">Get Welcome Message</button>

            </div>
            <div className="container">
                       {this.state.welcomemess}
            </div>
        
        </>         
    );
  }
}

export default Welcome;
