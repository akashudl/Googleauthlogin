import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Authenticationservice from "./Authenticationservice.js";
import  '../bootstrap.css';
import '../App.css';
class LoginComponent extends Component
{ constructor()
  {
    super();
    this.state={
     username:"",
     password:"",
     hasloginfailed:false,
     showsucessmess:false
    }
    this.handlevent=this.handlevent.bind(this);
  }
  handlevent=(event)=>
  {   console.log(this.state);
    this.setState(
      {
        [event.target.name]:event.target.value
      }
      );
  }
  check=()=>
  {  
    alert(this.state.username)
    var c=this.state.username;
    var d="@Qwikcilver.com";
    var g="@qwikcilver.com";
    var s=c.substring(c.length-15,c.length);
      if(this.state.username==="akash.pandit@qwicksilver.com"&&this.state.password==="iamakash")
      {  
        Authenticationservice.registersucessfulllogin(this.state.username,this.state.password);
        this.props.history.push(`/welcome/${this.state.username}`)
        //this.setState({showsucessmess:true});
        //this.setState({hasloginfailed:false});
      }
      else{
        
        alert("Login Failed");
       // this.setState({showsucessmess:false});
       // this.setState({hasloginfailed:true});
      }

    
    
  }
  render()
  {
    return(<>
    <div className="App">
          <h1>Login form</h1>
           <div className="container">
           <p>Enter the username</p>
          
            <input type="text" name ="username" onChange={this.handlevent}/><br>
            </br>
            <p>Enter the password</p>
            <input type="text" name="password" onChange={this.handlevent}/> <br>
            </br>
            <button onClick={this.check} className="button">SUBMIT</button>
            <Showinvalidcreditianl 
           hasloginfailed={this.state.hasloginfailed}/> 
           <ShowSucessfullogin
            showsucessmess={this.state.showsucessmess}/>
             </div>
             </div>
        </>
      );
  }
}
function Showinvalidcreditianl(props)
{
  if(props.hasloginfailed===true)
  {
  return <div className="alert alert-warning">Invalid Credentials</div>
}
return null
}
function ShowSucessfullogin(props)
{
  if(props.showsucessmess===true)
  {
    return <div>Sucessful login</div>
  }
  return null;
}


export default LoginComponent;