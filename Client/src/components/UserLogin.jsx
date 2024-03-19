import '../styles/UserLogin.css';
import { useState } from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Button from './Button.jsx';


const UserLogin = ({handleUserChange}) => {

      const [showSignUp, setShowSignUp] = useState(false);

    const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

    return(
        <>
        {showSignUp ? (
          <>
            <SignUp handleUserChange={handleUserChange} />
            <div>Already have a user?</div>
            <Button label={'Login here'} onClick={toggleSignUp} />
          </>
        ) : (
          <>
            <Login handleUserChange={handleUserChange} />
            <div>Don&apos;t have a user?</div>
            <Button label={'Sign up here'} onClick={toggleSignUp} />
          </>
        )}
    </>
    );
}

export default UserLogin;