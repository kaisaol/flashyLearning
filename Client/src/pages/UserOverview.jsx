import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { endreAdmin, slettBruker } from '../axios/bruker';
import axios from 'axios';
import '../styles/UserOverview.css';

const UserOverview = () => {
  const [isLoading, setLoading] = useState(true);
  const [brukere, setBrukere] = useState([]);
  const bruker = JSON.parse(sessionStorage.getItem('bruker'));

  useEffect(() => {
    axios
      .get('http://localhost:3000/bruker/allUsers')
      .then(async (data) => {
        setBrukere(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (bruker?.Admin !== 1) {
    return <div>Not authorized</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const changeAdmin = (e) => {
    const ID = e.target.id;
    let [brukerID, brukerAdmin] = [brukere[ID].ID, brukere[ID].Admin];

    if (brukerAdmin === 1) {
      brukerAdmin = 0;
    } else {
      brukerAdmin = 1;
    }

    const svar = endreAdmin(brukerID, brukerAdmin);

    if (svar) {
      brukere[ID].Admin = brukerAdmin;
      setBrukere([...brukere]);
    }
  };

  const deleteUser = (ID) => {
    const svar = slettBruker(ID);
    if (svar) {
      setBrukere(brukere.filter((bruker) => bruker.ID !== ID));
    }
  };

  return (
    <>
      <div id="userContainer">
        <h1>Administrate Users </h1>
        <div className="user">
          <h3>Username</h3>
          <h3>Admin</h3>
          <h3>Delete</h3>
        </div>
        <div id="userList">
          {brukere.map((bruker) => (
            <div className="user" key={bruker.ID}>
              <div>{bruker.Brukernavn}</div>
              <input
                type="checkbox"
                id={brukere.indexOf(bruker)}
                checked={bruker.Admin}
                onChange={changeAdmin}
              />
              <Button
                label={'Delete user'}
                onClick={() => {
                  deleteUser(bruker.ID);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserOverview;
