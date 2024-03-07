/* eslint-disable no-unused-vars */
import {getAllSets} from '../axios/bruker';
import { useState } from 'react';
import MyFlashcardContainer from '../components/MyFlashcardContainer';

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
    <div>Hei</div>
    <div>
        <MyFlashcardContainer oppdaterSetValgt={oppdaterSetValgt} getData={getAllSets} />
    </div>
    </>
)



}

export default AdminPage