import "./styles/App.css";
import "./components/Flashcard.jsx"
import Flashcard from "./components/Flashcard.jsx";

function App() {

  return (
    <div className="App">
        <Flashcard term={"Hvordan slayer man best mulig?"} definition={"Bånner en sekser og en flaske jäger"} />
    </div>
  );
}

export default App;
