class  Authenticationservice
{   
    registersucessfulllogin(username,password)
    {  
        alert("register Sucessfull")
        sessionStorage.setItem('authenticated',username);

    }
    logout()
    {
        sessionStorage.removeItem('authenticated');

    }
    isUserloggedin()
    {
        let user=sessionStorage.getItem('authenticated');
        if(user===null)
        return false;
        else
        return true;
    }
    getusername()
    {
        let user=sessionStorage.getItem('authenticated');
        if(user===null)
        return "";
        else
        return user;
    }

}
export default new Authenticationservice();