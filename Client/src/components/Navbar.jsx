import Button from "./Button"
import UserInterface from "./UserInterface";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

   const navigate = useNavigate();

   const goToHome = () => {
        return navigate('/');
    }

return (
<header className="navbar">
          <div className="HomeButton">
            <Button label={"Home"} onClick={goToHome}></Button>
          </div>
          <h1 className="webName" >Flashy</h1>
          <div className="Login">
            <div className="LoginButton">
              <UserInterface />
            </div>
          </div>
        </header>
)
}

export default Navbar;