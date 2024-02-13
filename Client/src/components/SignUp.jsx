import "../styles/SignUp.css";
import Button from "./Button";
import { useState } from 'react';


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
    <div className="form">
      <form>
          <h3 className="headerSignUp">Sign Up!</h3>
          <div className="input">
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
          </div>
          <div className="signUpButton">
          <Button onClick = {handleSignUp} label = {"Sign Up"} id = {"SignUpButton"}> </Button>
          </div>
      </form>
    </div>

);

}

export default SignUp;
