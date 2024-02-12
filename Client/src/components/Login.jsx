import "../styles/Login.css";
import Button from "./Button.jsx";

import { useState } from "react";


const Login = () => {

    function User(userName, password){
        this.userName = userName;
        this.password = password;
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(

        <form>

            <label htmlFor ="username">Brukernavn:</label><br />
            <input type ="text" id = "username"></input><br/>
            <label htmlFor="password">Passord:</label><br />
            <input type="password" id="password" ></input><br />

            <Button/>

        </form>


       
    );


}
export default Login;