import '../styles/MakeSet.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiaddFlashcard, apiupdateFlashcard } from '../axios/apiKallSet.js';
import Button from '../components/Button.jsx';
import axios from 'axios';

const FlashcardSet = () => {
  const [flashcardtempQ, setTempQ] = useState('');
  const [flashcardtempA, setTempA] = useState('');
  const [name, setName] = useState('Ingen navn');
  const [description, setDescription] = useState('Tom');

  const navigate = useNavigate();

  const [isIDgiven, setIDGiven] = useState(false);

  let ID = sessionStorage.getItem('setID');

  useEffect(() => {
    if (ID) {
      setIDGiven(true);
      axios
        .get('http://localhost:3000/flashcardSet', {
          params: {
            ID: ID,
          },
        })
        .then((data) => {
          sessionStorage.setItem(
            'tempCards',
            JSON.stringify(JSON.parse(data.data[0].Data))
          );
          setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
          setName(data.data[0].Navn);
          setDescription(data.data[0].Beskrivelse);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ID]);

  const [doneSet, setDoneSet] = useState(
    JSON.parse(sessionStorage.getItem('tempCards'))
  );

  if (!doneSet) {
    sessionStorage.setItem('tempCards', JSON.stringify([]));
    setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
  }

  function writeTempQ(e) {
    setTempQ(e.target.value);
  }

  function writeTempA(e) {
    setTempA(e.target.value);
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetDescription(e) {
    setDescription(e.target.value);
  }

  function deleteElement(e) {
    setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
    let index = e;
    doneSet.splice(index, 1);

    sessionStorage.setItem('tempCards', JSON.stringify(doneSet));
    setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
    setTempA('');
    setTempQ('');
  }

  function addTempToObject() {
    let object = [{ term: flashcardtempQ, definition: flashcardtempA }];
    let cards = JSON.parse(sessionStorage.getItem('tempCards'));
    cards = cards.concat(object);
    sessionStorage.setItem('tempCards', JSON.stringify(cards));
    setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
    setTempA('');
    setTempQ('');
  }

  async function addToDatabase() {
    setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
    const delivery = [name, description, JSON.stringify(doneSet), '[]', 0];
    const user = sessionStorage.getItem('bruker');
    if (!ID) {
      await apiaddFlashcard(delivery, user);
    } else {
      await apiupdateFlashcard(doneSet, ID);
    }
    sessionStorage.setItem('tempCards', JSON.stringify([]));
    setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
    sessionStorage.removeItem('setID');
    return navigate('/myset');
  }

  return (
    <div className="form" id="makeForm">
      <form>
        <h2 className="headerMakeSet">Opprett et flashcard set</h2>
        <label htmlFor="Name"> Navn</label>
        <input
          type="text"
          id="Name"
          value={name}
          onChange={handleSetName}
        ></input>
        <label htmlFor="Description"> Beskrivelse</label>
        <input
          type="text"
          id="Description"
          value={description}
          onChange={handleSetDescription}
        ></input>
      </form>
      <form>
        <h3 className="addQandA">Legg til spørsmål og svar</h3>
        <label htmlFor="Question"> Spørsmål</label>
        <textarea
          type="textarea"
          id="Question"
          value={flashcardtempQ}
          onChange={writeTempQ}
        ></textarea>
        <label htmlFor="Awnser"> Svar</label>
        <textarea
          type="textarea"
          id="Awnser"
          value={flashcardtempA}
          onChange={writeTempA}
        ></textarea>
      </form>
      <div className="formButtonContainer">
        <Button onClick={addTempToObject} label="Legg til Kort" idName="Add" />
        <Button
          onClick={addToDatabase}
          label={isIDgiven ? 'Endre set' : 'Opprett set'}
          idName="Done"
        />
      </div>
      <h2>Slett flashcard </h2>
      <div id="thisFar">
        {doneSet.map((card) => (
          <button
            key={doneSet.indexOf(card)}
            onClick={() => deleteElement(doneSet.indexOf(card))}
          >
            {card.term + ' : ' + card.definition}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlashcardSet;
