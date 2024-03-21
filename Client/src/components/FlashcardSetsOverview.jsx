import '../styles/FlashcardSetsOverview.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteFlashcard, likeFlashcard } from '../axios/apiKallSet';

const FlashcardSetOverview = ({ sets, onSetSelected, onDelete }) => {
  const handleDelete = async (setId, e) => {
    e.stopPropagation();
    const isConfirmed = window.confirm(
      'Er du sikker på at du vil slette dette settet?'
    );
    if (isConfirmed) {
      const set = sets.filter((set) => {
        set.ID === setId;
      });
      const indexOfSet = sets.indexOf(set);
      sets.splice(indexOfSet, 1);
      await deleteFlashcard(setId);
      onDelete(sets);
      //det over funka ikke så blir en lita reload
      window.location.reload();
    }
  };

  const user = JSON.parse(sessionStorage.getItem('bruker'));
  const location = useLocation();
  const navigate = useNavigate();

  let showDelete = false;
  let showEdit = false;
  if (user?.Admin == 1 && location.pathname === '/admin') {
    showDelete = true;
  }
  if (location.pathname === '/myset' && user) {
    showDelete = true;
    showEdit = true;
  }

  const display = showDelete ? 'block' : 'none';

  const handleLike = (setID) => {
    likeFlashcard(setID);
    window.location.reload();
  };

  const handleEdit = (setID) => {
    sessionStorage.setItem('setID', setID);
    return navigate('/setEditor');
  };

  return (
    <div className="sets-container">
      {sets.map((set) => (
        <div className="set-preview" key={set.ID}>
          <div onClick={() => onSetSelected(set.ID)}>
            <h2>{set.Navn}</h2>
            <button
              style={{ display: display }}
              onClick={(e) => handleDelete(set.ID, e)}
              className="delete-set-btn"
            >
              X
            </button>
            <p>Likes: {set.Likes} </p>
          </div>
          <button className="likeButton" onClick={() => handleLike(set.ID)}>
            Like
          </button>
          {showEdit && (
          <button className="editButton" onClick={() => handleEdit(set.ID)}>
            Edit
          </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlashcardSetOverview;
