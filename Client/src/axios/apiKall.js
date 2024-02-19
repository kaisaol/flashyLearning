import axios from 'axios';

/**
 * 
 * @param brukerID id of the user
 * @returns a user with the given id from the database
 */
export const apiBrukerKall = async (brukerID) => {
    return await axios.get('http://localhost:3000/bruker', {
        params: {
        ID: brukerID
        }
    }).then((data) => {
        console.log(data);
        return data.data[0];
    }).catch((error) => {
        console.log(error);
    });
}

export const testApi = async () => {
    await axios.get('http://localhost:3000/', {
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}