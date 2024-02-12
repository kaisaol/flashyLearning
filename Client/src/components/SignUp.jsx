import "../styles/SignUp.css";
import Button from "./Button";


const SignUp = () => {

function User(name, password){
    this.name = name;
    this.password = password;
}

handelSignUp = () => {
    const newUser = new User(userData.userName, userData.password);
}

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });



return (

    <form>
        <h3>Sign Up!</h3>
        <label htmlFor="userName">Brukernavn:</label><br />
        <input type="text" id = "userName" onChange = {handleInputChange } value = {userData.userName}/>
        <br />
        <label htmlFor="password">Passord:</label><br />
        <input type="text" id = "password" onChange = {handleInputChange} value = {userData.password}/>
        <br />
        <Button onClick = {handelSignUp} label = "Sign Up" id = "SignUpButton"> </Button>
        
    </form>

);

}

export default SignUp;
