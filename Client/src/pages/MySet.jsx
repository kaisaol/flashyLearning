import { useState } from 'react';
import FlashcardContainer from './FlashcardContainer';
import { getMineSet } from '../axios/bruker';

const MySet = () => {
  const bruker = sessionStorage.getItem('bruker');
  const [erSetValgt, setErSetValgt] = useState(false);

  const oppdaterSetValgt = (verdi) => {
    setErSetValgt(verdi);
  };

  const getMySets = async () => {
    const mySets = await getMineSet();
    return mySets;
  };

  // eslint-disable-next-line no-unused-vars
  const display = erSetValgt ? 'none' : 'block';

  return (
    <>
      {bruker ? (
        <div>
          <h1>MySet</h1>
          <FlashcardContainer oppdaterSetValgt={oppdaterSetValgt} getData={getMySets} />
        </div>
      ) : (
        'Logg inn for å se dine sett'
      )}
    </>
  );
};
export default MySet;
