/* eslint-disable no-unused-vars */
import {getAllSets} from '../axios/bruker';
import { useState } from 'react';
import MyFlashcardContainer from '../components/MyFlashcardContainer';
import '../styles/AdminPage.css';


const AdminPage = () => {

    const [erSetValgt, setErSetValgt] = useState(false);

    const oppdaterSetValgt = (verdi) => {
      setErSetValgt(verdi);
    };

    const getAllSets = async () => {
        const allSets = await getAllSets();
        return allSets;
    };





return (
    <>
    <div><h1>Administrer sets</h1></div>
    <div className='adminpp'>
        <MyFlashcardContainer oppdaterSetValgt={oppdaterSetValgt} getData={getAllSets} />
    </div>
    </>
)



}

export default AdminPage