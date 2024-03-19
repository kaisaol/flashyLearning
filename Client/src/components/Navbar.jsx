import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import UserInterface from './UserInterface';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    return navigate('/');
  };

  const pathsWhereHomeButtonIsHidden = ['/'];

  const isHomeButtonHidden = pathsWhereHomeButtonIsHidden.includes(
    location.pathname
  );

  return (
    <header className="navbar">
      <div
        className="HomeButton"
        style={{ visibility: isHomeButtonHidden ? 'hidden' : 'visible' }}
      >
        <Button label={'Home'} onClick={goToHome}></Button>
      </div>
      <h1 className="webName">Flashy</h1>

      <div className="Login">
        <div className="LoginButton">
          <UserInterface />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
