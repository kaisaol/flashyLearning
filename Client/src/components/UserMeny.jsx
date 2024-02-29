import '../styles/UserMeny.css';
import Button from './Button.jsx';

const UserMeny = ({handleUserChange}) => {

    const logout = () => {
        sessionStorage.removeItem('bruker');
        handleUserChange(false);
    }

    return (
        <Button label={'Logout'} onClick={logout} />
    )
}

export default UserMeny;