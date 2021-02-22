import React, { Component } from 'react';
import "./Todo.css";
import Authenticationservice from "./Authenticationservice.js";
import TodosService from "./Api/todo/TodosService.js";
import  '../bootstrap.css';
import moment from 'moment';
class TodoComponents extends Component
{  constructor(props)
    {
        super(props)
        this.state={
            todo:[],
              //  {id:1,description:'Learn React',done:true,targetdate: new Date().toLocaleDateString()},
                //{id:2,description:'Learn NodeJs',done:false,targetdate: new Date().toLocaleDateString()},
                //{id:3,description:'Become Full StackDeveloper',done:false,targetdate:new Date().toLocaleDateString()}
                message:null
        }
        this.deletetodoclicked=this.deletetodoclicked.bind(this);
        this.refershcomponent=this.refershcomponent.bind(this);
        this.updatetodoclicked=this.updatetodoclicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }
    componentDidMount()
    {
       console.log("Componentdidmount");
        this.refershcomponent();


    }
    refershcomponent()
    {
        let username=Authenticationservice.getusername()
        TodosService.retrivealltodos(username).then(response=>
            {
                this.setState({todo:response.data})
            })
    }
    deletetodoclicked(id)
    {
        let username=Authenticationservice.getusername()
        TodosService.deletetodo(username,id).then(
            response=>{
                this.setState({message: `Deleted of Todo ${1} Succesuful`})
                this.refershcomponent()
            }
        )
    }
    
    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }

    updatetodoclicked(id)
    {
        console.log("upadte"+" "+id);
        this.props.history.push(`/todos/${id}`)
    }
    render()
    {
        return(
           <div className="Todoa">
            <h1>ToDo List</h1>
           {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                     
                        <th>Description</th>
                        <th>Is Completed</th>
                        <th>Targetdate</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.todo.map(
                        todo=>  <tr key={todo.id}>
                   
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{moment(todo.targetdate).format('YYYY-MM-DD')}</td>
                        <td><button className="btn btn-success" onClick={()=>this.updatetodoclicked(todo.id)}>UPDATE</button></td>
                        <td><button className="btn btn-warning" onClick={()=>this.deletetodoclicked(todo.id)}>DELETE</button></td>
                    </tr>

                    )
                  
                    }
                </tbody>

            </table>
            <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
            </div>
           </div>
        );
    }
}
export default TodoComponents;