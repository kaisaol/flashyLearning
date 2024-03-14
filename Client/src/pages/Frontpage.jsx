import '../styles/Frontpage.css';
import { useEffect, useState } from 'react';
import FlashcardContainer from './FlashcardContainer';
import axios from 'axios';


const FrontPage = () => {
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


  const display = erSetValgt ? 'none' : 'block';

  return (
    <>
      <div className='frontpageHeader'>
        <div className="welMessage" style={{ display: display }}>
          <h2 className="welHeader">
            Welcome to Flashy, a simple learning tool
          </h2>
          <p className="welPara">
            Log in to create your own sets, or check out our most popular sets below
          </p>
        </div>
      </div>
      <FlashcardContainer oppdaterSetValgt={oppdaterSetValgt} getData={sets}
       />
      </>
  );
};

export default FrontPage;
