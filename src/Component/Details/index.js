import React,{useState} from 'react'
import './style.css'

/**
* @author
* @function REGISTER
**/

const REGISTER = (props) => {
    const [name,setName] = useState({
        fName:'',
        lName:'',
        email:'',
        pwd:''
    });
    
    const inputevent=(e)=>{
        setName(e.target.value);
    }

const onSubmits=(event)=>{
    event.preventDefault();
    alert('Account Created successfully')
}


  return(
      <form onSubmit={onSubmits}>
    <div>
        <h1>REGISTER</h1>
        <input type="text" placeholder="Enter your FirstName"  onChange={inputevent} value={name.fName}/><br/>
        <input type="text" placeholder="Enter your LastName"  onChange={inputevent} value={name.lName}/><br/>
        <input type="email" placeholder="Enter your emailAddress"  onChange={inputevent} value={name.email}/><br/>
        <input type="password" placeholder="Enter your password"  onChange={inputevent} value={name.pwd}/><br/>
        <button type="submit" >Register</button>
        
    </div>
    </form>
   )

 }

export default REGISTER