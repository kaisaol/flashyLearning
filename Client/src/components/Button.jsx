import "../styles/Button.css";

const Button = ({onClick, label, shape}) => {

    return(

        <button
            class = "defaultButton"
            onClick = {onClick}
        >
            Logg inn
            {label}
        </button>

    );


}

export default Button

