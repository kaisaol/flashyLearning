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

    return (
      <>
        <Button label={'Logout'} onClick={logout} />
        <Button label= {'Mine Set'} onClick={goToMySet}></Button>
      </>
    );
}

export default UserMeny;