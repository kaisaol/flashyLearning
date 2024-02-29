import axios from 'axios';

export const apiFlashcardKall = async (setID) => {
    return await axios.get('http://localhost:3000/flashcardSet', {
        params: {
        ID: setID
        }
    }).then((data) => {
        console.log(data);
        return data.data[0];
    }).catch((error) => {
        console.log(error);
    });
}

export const apiaddFlashcard = async (row) => {
    return await axios.get('http://localhost:3000/addFlashcardSet/add', {
        params: {
        row : row
        }
    }).then((data) => {
        console.log(data);
        return data.data;
    }).catch((error) => {
        console.log(error);
    });
}


export const apiupdateFlashcard = async (row,SetID) => {
    return await axios.get('http://localhost:3000/updateFlashcartSet/update', {
        params: {
        SetID: SetID,
        row : row
        }
    }).then((data) => {
        console.log(data);
        return data.data;
    }).catch((error) => {
        console.log(error);
    });
}