/* eslint-disable no-unused-vars */
//import { apiBrukerKall } from "./axios/apiKall";
import "./styles/App.css";
import Button from "./components/Button.jsx";
import SignUp from "./components/SignUp.jsx";
import Flashcard from "./components/Flashcard.jsx";
import FlashcardSet from "./components/FlashcardSet.jsx";
import FlashcardContainer from "./pages/FlashcardContainer.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  /**
   
  const testBruker = async () => {
    const bruker = await apiBrukerKall(1);
  }
  bruker();
  */

  return (
    <div className="wrapper">
        <Navbar></Navbar>
        <main className="main">
          
          <div className="flashSets">
                <FlashcardContainer></FlashcardContainer>
               
          </div>
        </main>
    </div>
  );
}

export default App;
