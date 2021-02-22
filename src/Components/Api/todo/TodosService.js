import axios from "axios";

class TodosService {
    retrivealltodos(name)
    {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
 
    }
    deletetodo(name ,id)
    {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
    retrivetodos(name,id)
    {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
 
    }
    updateTodo(name,id,todo)
    {
       return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }
    cerateTodo(name,todo)
    {
       return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }
    
}

export default new TodosService;