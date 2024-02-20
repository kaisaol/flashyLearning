import '../styles/UserInterface.css';
import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import UserMeny from './UserMeny.jsx';
import UserLogin from './UserLogin.jsx';

const UserInterface = () => {
  const [isLoginHidden, setIsLoginHidden] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [bruker, setBruker] = useState(sessionStorage.getItem('bruker'));
  
  const handleUserChange = (value) => {
    setIsLoggedIn(value);
  };

  useEffect(() => {
    if (bruker !== null) {
      handleUserChange(true);
    }else{
      handleUserChange(false);
    }
  }, [bruker]);


  const toggleLogin = () => {
    setIsLoginHidden(!isLoginHidden);
  };

  const display = isLoginHidden ? 'none' : 'block';

  return (
    <div id="userContainer">
      <Button label={'Login'} onClick={toggleLogin} />
      <div id="loginContainer" style={{ display: display }}>
        <div className="uparrow"></div>
        {isLoggedIn ? <UserMeny handleUserChange={handleUserChange} /> : <UserLogin handleUserChange={handleUserChange} />}
      </div>
    </div>
  );
};

export default UserInterface;
