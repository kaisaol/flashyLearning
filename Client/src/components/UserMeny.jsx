import '../styles/UserMeny.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';

const UserMeny = ({ handleUserChange }) => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('bruker'));

  const isAdmin = user && user.Admin == 1;

  const logout = () => {
    sessionStorage.removeItem('bruker');
    handleUserChange(false);
    return navigate('/');
  };

  const goToMySet = () => {
    return navigate('/myset');
  };

  const goToAdminPage = () => {
    return navigate('/admin');
  };

  const display = isAdmin ? 'block' : 'none';

  const goToAdminUsers = () => {
    return navigate('/users');
  };

  const goToCreateSet = () => {
    sessionStorage.removeItem('setID');
    sessionStorage.setItem('tempCards', JSON.stringify([]))
    return navigate('/setEditor');
  };

  return (
    <>
      <div className="userMeny">
        <Button label={'Logout'} onClick={logout} />
        <Button label={'Mine Set'} onClick={goToMySet}></Button>
        <Button label={'Opprett Set'} onClick={goToCreateSet}></Button>
        <div style={{ display: display }}>
          <Button label={'Administrer kort'} onClick={goToAdminPage}></Button>
        </div>
        <div style={{ display: display }}>
          <Button label={'Brukeroversikt'} onClick={goToAdminUsers}></Button>
        </div>
      </div>
    </>
  );
};

export default UserMeny;
