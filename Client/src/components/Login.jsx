import '../styles/Login.css';
import Button from './Button.jsx';
import { useState } from 'react';
import { loggInn } from '../axios/bruker.js';

const Login = ({ handleUserChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [feedbackText, setFeedbackText] = useState('');

  function handleSetUsername(e) {
    setUsername(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  const handleFeedbackChange = (text) => {
    setFeedbackText(text);
  };

  const onLoginButtonAction = async () => {
    const bruker = await loggInn(username, password);
    if (username === '' || password === '') {
      handleFeedbackChange('Fyll inn brukernavn og passord');
      return;
    }
    if (bruker.Brukernavn === undefined) {
      handleFeedbackChange('Feil brukernavn eller passord');
      return;
    }
    handleFeedbackChange('');
    sessionStorage.setItem('bruker', JSON.stringify(bruker));
    handleUserChange(true);
  };

  return (
    <div className="form">
      <form>
        <h3 className="headerSignUp">Login!</h3>
        <label htmlFor="username">Brukernavn:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleSetUsername}
        ></input>
        <label htmlFor="password">Passord:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleSetPassword}
        ></input>
      </form>
      <Button
        onClick={onLoginButtonAction}
        label="Login"
        idName="LoginButton"
      />
      <div className="feedback">{feedbackText}</div>
    </div>
  );
};
export default Login;
