/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import MyFlashcardContainer from '../components/MyFlashcardContainer';
import '../styles/AdminPage.css';
import axios from 'axios';

const AdminPage = () => {
  const [erSetValgt, setErSetValgt] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);
  const oppdaterSetValgt = (verdi) => {
    setErSetValgt(verdi);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/bruker/popularSets')
      .then(async (data) => {
        setSets(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Administrer sets</h1>
      </div>
      <div className="adminpp">
        <MyFlashcardContainer
          oppdaterSetValgt={oppdaterSetValgt}
          getData={sets}
        />
      </div>
    </>
  );
};

export default AdminPage;
