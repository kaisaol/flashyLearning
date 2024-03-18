import axios from 'axios';

/**
 * @param brukernavn is the username of the user
 * @param passord is the password of the user
 * @returns user if the user is created, undefined if the user is not created
 */
export const registrer = async (brukernavn, passord) => {
  return await axios
    .post('http://localhost:3000/bruker/signup', {
      brukernavn: brukernavn,
      passord: passord,
    })
    .then((data) => {
      return data.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * @param brukernavn is the username of the user
 * @param passord is the password of the user
 * @returns the user if the username and password are correct, undefined if they are not
 */
export const loggInn = async (brukernavn, passord) => {
  return await axios
    .get('http://localhost:3000/bruker/login', {
      params: {
        brukernavn: brukernavn,
        passord: passord,
      },
    })
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMineSet = async (brukerID) => {
  return await axios
    .get('http://localhost:3000/bruker/mySets', {
      params: {
        ID: brukerID,
      },
    })
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllSets = async () => {
  return await axios
    .get('http://localhost:3000/bruker/allSets', {
      params: {
        
      },
    })
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPopularSets = async () => {
  return await axios
    .get('http://localhost:3000/bruker/popularSets', {
      params: {
        
      },
    })
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAlleBrukere = async () => {
  return await axios
    .get('http://localhost:3000/bruker/allUsers')
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const endreAdmin = async (brukerID, admin) => {
  return await axios
    .post('http://localhost:3000/bruker/changeAdmin', {
      ID: brukerID,
      Admin: admin,
    })
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const slettBruker = async (brukerID) => {
  return await axios
    .delete('http://localhost:3000/bruker/deleteUser', {
      params: {
        ID: brukerID,
      },
    })
    .then(async (data) => {
      return await data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
