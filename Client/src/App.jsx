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
    <div>
      Hello world :)
      <br />
      <Button />
      <SignUp></SignUp>
    </div>
  );
}

export default App;
