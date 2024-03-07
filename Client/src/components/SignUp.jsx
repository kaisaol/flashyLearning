import '../styles/SignUp.css';
import Button from './Button';
import { useState } from 'react';
import { registrer } from '../axios/bruker';

const SignUp = ({handleUserChange}) => {
  const [username, setUserName] = useState('');
  const [password, setPass] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackChange = (text) => {
    setFeedbackText(text);
  };

  const userChange = (event) => {
    setUserName(event.target.value);
  };
  
  const passChange = (event) => {
    setPass(event.target.value);
  };
  
  const handleSignUp = async () => {
    if(username === '' || password === ''){
      handleFeedbackChange('Fyll inn brukernavn og passord');
      return;
    }
    
    const bruker = await registrer(username, password);
    console.log(bruker);
    if (bruker !== undefined) {
      handleFeedbackChange('Brukeren eksisterer allerede');
      return;
    }

    handleFeedbackChange('');
    sessionStorage.setItem('bruker', JSON.stringify(bruker));
    handleUserChange(true);
  };

  return (
    <div className="form">
      <form>
        <h3 className="headerSignUp">Sign Up!</h3>
        <div className="input">
          <label htmlFor="userName">Brukernavn:</label>
          <input
            type="text"
            id={'userName'}
            onChange={userChange}
            value={username}
          />
          <label htmlFor="password">Passord:</label>
          <input
            type="text"
            id={'password'}
            onChange={passChange}
            value={password}
          />
        </div>
      </form>
      <Button onClick={handleSignUp} label={'Sign Up'} id={'SignUpButton'} />
      <div className="feedback">{feedbackText}</div>
    </div>
  );
};

export default SignUp;
