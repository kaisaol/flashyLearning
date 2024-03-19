import '../styles/UserMeny.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';

const UserMeny = ({handleUserChange}) => {

    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('bruker')); 
    
    const isAdmin = user && user.Admin == 1;

    const logout = () => {
        sessionStorage.removeItem('bruker');
        handleUserChange(false);
        return navigate('/');
    }

    const goToMySet = () => {
        return navigate('/myset');
    }

    const goToAdminPage = () => {
      return navigate('/admin');
    }

    const display = isAdmin ? 'block' : 'none';

    const goToAdminUsers = () => {
      return navigate('/users');
    }

    return (
      <>
      <div>
        <Button label={'Logout'} onClick={logout} />
        <Button label={'Mine Set'} onClick={goToMySet}></Button>
        <div style={{ display: display }}>
          <Button label= {'Modeller kort'} onClick={goToAdminPage}></Button>
        </div>
        </div>
        <Button label={'Brukeroversikt'} onClick={goToAdminUsers}></Button>
      </>
    );}

export default UserMeny;