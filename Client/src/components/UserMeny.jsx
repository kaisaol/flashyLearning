import '../styles/UserMeny.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';

const UserMeny = ({handleUserChange}) => {

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('bruker');
        handleUserChange(false);
        return navigate('/');
    }

    const goToMySet = () => {
        return navigate('/myset');
    }

    const goToAdminUsers = () => {
      return navigate('/users');
    }

    return (
      <>
        <Button label={'Logout'} onClick={logout} />
        <Button label={'Mine Set'} onClick={goToMySet}></Button>
        <Button label={'Administrer '} onClick={goToAdminUsers}></Button>
      </>
    );
}

export default UserMeny;