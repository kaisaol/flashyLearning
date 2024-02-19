/* eslint-disable no-unused-vars */
//import { apiBrukerKall } from "./axios/apiKall";
import "./styles/App.css";
import Button from "./components/Button.jsx";
import SignUp from "./components/SignUp.jsx";


function App() {
  /**
   
  const testBruker = async () => {
    const bruker = await apiBrukerKall(1);
  }
  bruker();
  */

  return (
    <div className="wrapper">
        <header className="navbar">
          <div className="HomeButton">
            <Button label={"Home"}></Button>
          </div>
          <h1 className="webName" >Flashy</h1>
          <div className="Login">
            <div className="LoginButton">
              <Button label={"Login"}></Button>
            </div>
            <div className="SignInButton">
            <Button label={"Sign Up"}></Button>
            </div>
          </div>
        </header>
        <main className="main">
          <p>Dette er mainen</p>
        </main>
    </div>
  );
}

export default App;
