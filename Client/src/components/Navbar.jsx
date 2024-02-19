import Button from "./Button"


const Navbar = () => {

return (
<header className="navbar">
          <div className="HomeButton">
            <Button label={"Home"}></Button>
          </div>
          <h1 className="webName" >Flashy</h1>
          <div className="Login">
            <div className="LoginButton">
              <Button label={"Login"}></Button>
            </div>
            <div className="SignInButton">
            <Button label={"Sign Up"}></Button>
            </div>
          </div>
        </header>
)
}

export default Navbar;