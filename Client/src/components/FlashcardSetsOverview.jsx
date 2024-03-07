import '../styles/FlashcardSetsOverview.css';
import { useLocation } from 'react-router-dom';
import { deleteFlashcard } from '../axios/apiKallSet';

const FlashcardSetOverview = ({ sets, onSetSelected }) => {

  const handleDelete = (setId) => {
    const sjekk = deleteFlashcard(setId);
    console.log(sjekk)
  }

  const user = JSON.parse(sessionStorage.getItem('bruker')); 
  const location = useLocation();

  let showDelete = false;
  if (user?.Admin == 1){
    showDelete = true;
  }
  if (location.pathname === "/myset" && user) {
    showDelete = true;
  }

  const display = showDelete ? 'block' : 'none';

  return (
    <div className="sets-container">
      {sets.map((set) => (
        <div
          key={set.id}
          onClick={() => onSetSelected(set.id)}
          className="set-preview"
        >
          <h2>{set.title}</h2>
          <button style = {{display:display}} onClick={(e) => handleDelete(set.id, e)} className="delete-set-btn">x</button>
        </div>
      ))}
    </div>
  );
};

export default FlashcardSetOverview;
