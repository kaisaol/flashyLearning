import "../styles/Login.css";
import Button from "./Button.jsx";
/* eslint-disable no-unused-vars */
import { useState } from "react";


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSetUsername(e){
        setUsername(e.target.value)
    }


    function handleSetPassword(e){
        setPassword(e.target.value)
    }

    function onLoginButtonAction(e){
        e.preventDefault();
        const newUser = {username: username, password: password}
       
    }

    return(

        <form>

            <label htmlFor ="username">Brukernavn:</label><br />
            <input type ="text" id = "username" value={username} onChange={handleSetUsername} ></input><br/>
            <label htmlFor="password">Passord:</label><br />
            <input type="password" id="password" value={password} onChange={handleSetPassword}></input><br />

            <Button onClick={onLoginButtonAction} label = "Login" idName = "LoginButton"/>

        </form>

    );


}
export default Login;


