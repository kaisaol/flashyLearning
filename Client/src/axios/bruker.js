import axios from 'axios';

/**
 * @param brukernavn is the username of the user
 * @param passord is the password of the user
 * @returns true if the username is available and registered, false if it is not
 */
export const registrer = async (brukernavn, passord) => {
  return await axios
    .post('http://localhost:3000/bruker/signup', {
      brukernavn: brukernavn,
      passord: passord,
    })
    .then((data) => {
      return data.data;
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
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
