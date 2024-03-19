import { useEffect, useState } from 'react';
import {apiaddFlashcard,
        apiupdateFlashcard} from '../axios/apiKallSet.js';
import Button from './Button.jsx';
import axios from 'axios';


const FlashcardSet = () => {
    const [flashcardtempQ, setTempQ] = useState('');
    const [flashcardtempA, setTempA] = useState('');
    const [name, setName] = useState("Ingen navn");
    const [description, setDescription] = useState("Tom");
    
    let ID = sessionStorage.getItem('setID');

    const flashcardKall = async (setID) => {axios.get('http://localhost:3000/flashcardSet', {
            params: {
            ID: setID
            }
        }).then((data) => {
            sessionStorage.setItem('tempCards',JSON.stringify(JSON.parse(data.data[0].Data)))
            setName(data.data[0].Navn)
            setDescription(data.data[0].Beskrivelse)
        }).catch((error) => {
            console.log(error);
        })};
        useEffect(() => {
            if(!ID){
                console.log("Ingen lagret ID")
            } else {
            flashcardKall(ID)}}, [ID]);

    const [doneSet, setDoneSet] = useState(JSON.parse(sessionStorage.getItem('tempCards')))


    if(!doneSet){
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
        setName(e.target.value)
    }

    function handleSetDescription(e) {
        setDescription(e.target.value)
    }

    function deleteElement(e) {
        setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
        let index = e
        doneSet.splice(index,1)
        sessionStorage.setItem('tempCards',JSON.stringify(doneSet))
        console.log(doneSet)
        setTempA("");
        setTempQ("");
    }

    


    function addTempToObject() {
        let object = [{term: flashcardtempQ , definition: flashcardtempA}];
        console.log(object)
        let cards = JSON.parse(sessionStorage.getItem('tempCards'));
        cards = cards.concat(object)
        console.log(cards)
        setDoneSet(cards);
        sessionStorage.setItem('tempCards', JSON.stringify(doneSet));
        setTempA("");
        setTempQ("");
        
        }

    function addToDatabase() {
        setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
        const delivery = [name,description,doneSet, '[]', 0];
        const user = sessionStorage.getItem('bruker');
        if(!ID){
            apiaddFlashcard(delivery,user);
        } else {
            apiupdateFlashcard(delivery,ID);
        }
        sessionStorage.setItem('tempCards', JSON.stringify([]));
        setDoneSet(JSON.parse(sessionStorage.getItem('tempCards')));
    }

    

    return(
        <div className='form' >
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
            <h1>Delete current </h1>
            <div id='thisFar'>
                {
                    doneSet.map(card => 
                        <button  key = {doneSet.indexOf(card)} onClick={() => deleteElement(doneSet.indexOf(card))}>{card.term + " : " + card.definition}</button>)
                }
            </div>
        </div>
    );
};

export default FlashcardSet;