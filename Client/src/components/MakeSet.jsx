import { useState } from 'react';
import {apiFlashcardKall,
        apiaddFlashcard,
        apiupdateFlashcard
} from '../axios/apiKallSet.js';
import Button from './Button.jsx';

const FlashcardSet = () => {
    const [flashcardtempQ, setTempQ] = useState('');
    const [flashcardtempA, setTempA] = useState('');
    const [name, setName] = useState("Ingen navn");
    const [description, setDescription] = useState("Tom");

    let doneSet = sessionStorage.getItem('tempCards')
    
    if(!doneSet){
        sessionStorage.setItem('tempCards', JSON.stringify([]));
        doneSet = sessionStorage.getItem('tempCards')
    }

    
    function writeTempQ(e) {
        setTempQ(e.target.value);
        console.log(flashcardtempQ)
    }

    function writeTempA(e) {
        setTempA(e.target.value);
    }

    function handleSetName(e) {
        setName(e.target.value)
    }

    function handleSetDescription(e) {
        setDescription(e.target.value)
    }

    function addTempToObject() {
        var object = {term: flashcardtempQ , definition: flashcardtempA};
        const cards = JSON.parse(sessionStorage.getItem('tempCards'))
        console.log(cards)
        cards.push(object)
        doneSet = cards
        sessionStorage.setItem('tempCards', JSON.stringify(doneSet))
        console.log(doneSet);
        setTempA("")
        setTempQ("")
        console.log(doneSet);
    }

    function addToDatabase(ID) {
        doneSet = sessionStorage.getItem('tempCards')
        const delivery = [name,description,doneSet, '[]', 0];
        console.log(delivery);
        const user = sessionStorage.getItem('bruker')
        apiaddFlashcard(delivery,user);
        sessionStorage.setItem('tempCards', JSON.stringify([]));
        
    }

    return(
        <div className='form'>
            <form>
            <h3 className='headerMakeSet'>Opprette et flashcard set</h3>
                <label htmlFor='Name'> Navn</label>
                <input
                type='text'
                id='Name'
                value={name}
                onChange={handleSetName}></input>
                <label htmlFor='Description'> Beskrivelse</label>
                <input
                type='text'
                id='Description'
                value={description}
                onChange={handleSetDescription}></input>
            </form>
            <form>
                <h3 className='addQandA'>Legg til spørsmål og svar</h3>
                <label htmlFor="Question"> Spørsmål</label>
                <input
                type="text"
                id = "Question"
                value={flashcardtempQ}
                onChange={writeTempQ}
                ></input>
                <label htmlFor="Awnser"> Svar</label>
                <input
                type="text"
                id = "Awnser"
                value={flashcardtempA}
                onChange={writeTempA}
                ></input>
            </form>
            <Button
                onClick={addTempToObject}
                label="Legg til Kort"
                idName="Add"
                />
            <Button
                onClick={addToDatabase}
                label="Opprett set"
                idName="Done"
                />
            <div className='thisFar'>{doneSet.toString()}</div>
        </div>
    );
};

export default FlashcardSet;