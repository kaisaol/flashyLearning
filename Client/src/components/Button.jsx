import "../styles/Button.css";

const Button = ({onClick, label, idName}) => {

    return(

        <button
            class = "defaultButton"
            onClick = {onClick}
            id = {idName}
        >

            {label}
        </button>

    );


}

export default Button

