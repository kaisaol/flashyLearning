import "../styles/SignUp.css";
import Button from "./Button";
import React, { useState } from 'react';


const SignUp = () => {

function User(name, password){
    this.name = name;
    this.password = password;
}


const handleSignUp = (event) => {
    event.preventDefault();
    const newUser = new User(username, password);
    console.log({newUser})
}


  const handleUserChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const [username, setUserName] = useState('');
  const [password, setPass] = useState('');



return (

    <form>
        <h3>Sign Up!</h3>
        <label htmlFor="userName">Brukernavn:</label><br />
        <input
            type="text" 
            id = {"userName"} 
            onChange = {handleUserChange} 
            value = {username }
         />
         
        <br />
        <label htmlFor="password">Passord:</label><br />
        <input
            type="text" 
            id = {"password"}
            onChange = {handlePassChange} 
            value = {password}/>
        <br />
        <Button onClick = {handleSignUp} label = {"Sign Up"} id = {"SignUpButton"}> </Button>
        
    </form>

);

}

export default SignUp;
