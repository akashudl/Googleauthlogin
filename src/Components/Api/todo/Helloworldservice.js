import axios from "axios";

class Helloworldservice
{  
    executeHelloWorldService()
    {
        return axios.get('http://localhost:8080/helloworld');
 
    }

}
export default new Helloworldservice();