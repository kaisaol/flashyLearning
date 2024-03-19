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


export const apiupdateFlashcard = async (row,SetID) => {
    return await axios
    .post('http://localhost:3000/flashcardSet/update', {
        SetID: SetID,
        row : row
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

export const deleteFlashcard = async (setID) => {
    return await axios.delete('http://localhost:3000/flashcard/delete', {
        params: {
        setID: setID,
        }
    }).then((data) => {
        console.log(data);
        return data.data;
    }).catch((error) => {
        console.log(error);
    });
}

export const likeFlashcard = async (setID) => {
    return await axios.post('http://localhost:3000/flashcardset/like', {
        setID: setID,
    }).then((data) => {
        console.log(data.data)
        return data.data;
    }).catch((error) => {
        console.log(error);
    });
}

export const getLikeCount = async (setID) => {
    return await axios.get('http://localhost:3000/flashcard/getLikes', {
        params: {
        setID: setID,
        }
    }).then((data) => {
        console.log(data);
        return data.data;
    }).catch((error) => {
        console.log(error);
    });
}