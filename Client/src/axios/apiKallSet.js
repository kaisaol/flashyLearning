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

export const apiaddFlashcard = async (row, userID) => {
    return await axios
    .post('http://localhost:3000/flashcardSet/add', {
        row : row,
        userID : userID
    }).then(async (data) => {
        console.log(data);
        return await data.data;
    }).catch((error) => {
        console.log(error);
    });
}


export const apiupdateFlashcard = async (data,SetID) => {
    return await axios.get('http://localhost:3000/update', {
        params: {
        SetID: SetID,
        data : data
        }
    }).then((data) => {
        console.log(data);
        return data.data;
    }).catch((error) => {
        console.log(error);
    });
}

export const apiFlashcardSlett = async (setID) => {
    return await axios.get('http://localhost:3000/flashcardSet/delete', {
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