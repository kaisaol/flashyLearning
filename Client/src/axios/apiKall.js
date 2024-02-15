import axios from 'axios';

export const getBruker = async (ID) => {
    return await axios.get('http://localhost:3000/bruker', {
        params: {
        ID: ID
        }
    }).then((data) => {
        return data.data;
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