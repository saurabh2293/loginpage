import React,{useState} from 'react'
import './style.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

/**
* @author
* @function Login
**/

const Login = (props) => {
    const [name,setName] = useState({
        fName:'',
        pwd:''
    });
    
    const inputevent=(e)=>{
        setName(e.target.value);
    }

const onSubmits=(event)=>{
    event.preventDefault();
    alert('form submitted')
}


  return(
      <form onSubmit={onSubmits}>
    <div>
        <h1>LOGIN</h1>
        <input type="text" placeholder="Enter your emailaddress"  onChange={inputevent} value={name.fName}/><br/>
        <input type="password" placeholder="Enter your password"  onChange={inputevent} value={name.pwd}/><br/>
        <button type="submit" >Submit Me</button>
        <Link to="/update">
        <button type="button" >Update</button>
        </Link>
    </div>
    </form>
   )

 }

export default Login