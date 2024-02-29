import Button from "./Button"
import UserInterface from "./UserInterface";


const Navbar = () => {

return (
<header className="navbar">
          <div className="HomeButton">
            <Button label={"Home"}></Button>
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