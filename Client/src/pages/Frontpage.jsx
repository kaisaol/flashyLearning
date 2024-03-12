import '../styles/Frontpage.css';
import { useState } from 'react';
import FlashcardContainer from './FlashcardContainer';


const FrontPage = () => {
  const [erSetValgt, setErSetValgt] = useState(false);

  const oppdaterSetValgt = (verdi) => {
    setErSetValgt(verdi);
  };

  const display = erSetValgt ? 'none' : 'block';

  return (
    <>
      <div className='frontpageHeader'>
        <div className="welMessage" style={{ display: display }}>
          <h2 className="welHeader">
            Welcome to Flashy, a simple learning tool
          </h2>
          <p className="welPara">
            Log in to create your own sets, or check out some of the sets below
          </p>
        </div>
      </div>
      <FlashcardContainer oppdaterSetValgt={oppdaterSetValgt} />
      </>
  );
};

export default FrontPage;
