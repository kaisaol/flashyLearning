import { useState } from "react";
import Button from "../components/Button.jsx";
import FlashcardSet from "../components/MakeSet.jsx"

function FlashcardSetCreator() {
    const [currentUserID, setCurrentUserID] = useState(undefined);

    const handleSetSelected = (id) => {
        setCurrentUserID(id);
    };


return(
<FlashcardSet user ={currentUserID}></FlashcardSet>
)

}

export default FlashcardSetCreator;