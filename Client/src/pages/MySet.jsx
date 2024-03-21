import { useState, useEffect } from 'react';
import MyFlashcardContainer from '../components/MyFlashcardContainer';
import '../styles/MySets.css';
import axios from 'axios';

const MySet = () => {
  const bruker = JSON.parse(sessionStorage.getItem('bruker'));
  const [erSetValgt, setErSetValgt] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);

  const oppdaterSetValgt = (verdi) => {
    setErSetValgt(verdi);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/bruker/mySets', {
        params: {
          ID: bruker.ID,
        },
      })
      .then(async (data) => {
        setSets(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bruker.ID]);

  if (isLoading) {
    return <div> Loading...</div>;
  }

  const onDelete = (sets) => {
    setSets(sets);
  };

  // eslint-disable-next-line no-unused-vars
  const display = erSetValgt ? 'none' : 'block';

  return (
    <>
      {bruker ? (
        <>
          <h2 className="mySetsHeader" style={{ display: display }}>
            Mine set
          </h2>
          <div className="mySetContainer">
            {sets[0] !== undefined ? (
              <MyFlashcardContainer
                oppdaterSetValgt={oppdaterSetValgt}
                getData={sets}
                onDelete={onDelete}
              />
            ) : (
              'Du har ingen sett'
            )}
          </div>
        </>
      ) : (
        'Logg inn for å se dine sett'
      )}
    </>
  );
};
export default MySet;
