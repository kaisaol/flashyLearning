import { useState, useEffect } from 'react';
import FlashcardContainer from './FlashcardContainer';
import '../styles/MySets.css';
import axios from 'axios';


const MySet = () => {
  const bruker = sessionStorage.getItem('bruker');
  const [erSetValgt, setErSetValgt] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);

  const oppdaterSetValgt = (verdi) => {
    setErSetValgt(verdi);
  };

  useEffect(() => {
    axios
    .get('http://localhost:3000/bruker/mySets')
    .then(async (data) => {
      setSets(data.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  if(isLoading){
    return <div> Loading...</div>
  }

  



  // eslint-disable-next-line no-unused-vars
  const display = erSetValgt ? 'none' : 'block';

  return (
    <>
      {bruker ? (
        <div>
          <h1 className='mySetsHeader' style={{ display: display }}> My sets </h1>
          <FlashcardContainer oppdaterSetValgt={oppdaterSetValgt} getData={sets} />
        </div>
      ) : (
        'Logg inn for å se dine sett'
      )}
    </>
  );
};
export default MySet;
