import '../styles/Button.css';

const Button = ({onClick, label, idName}) => {

    return(

        <button
            className = "defaultButton"
            onClick = {onClick}
            id = {idName}
        >
            {label}
        </button>

    );


}

export default Button
