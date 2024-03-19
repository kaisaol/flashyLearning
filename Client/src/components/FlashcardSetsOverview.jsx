import '../styles/FlashcardSetsOverview.css';
import { useLocation } from 'react-router-dom';
import { deleteFlashcard, likeFlashcard } from '../axios/apiKallSet';



const FlashcardSetOverview = ({ sets, onSetSelected }) => {



  const handleDelete = (setId, e) => {
    e.stopPropagation();
    const isConfirmed = window.confirm("Er du sikker på at du vil slette dette settet?");
    if (isConfirmed) {
      const sjekk = deleteFlashcard(setId);
      console.log(sjekk);
  }
  }


  const user = JSON.parse(sessionStorage.getItem('bruker')); 
  const location = useLocation();

  let showDelete = false;
  if (user?.Admin == 1 && location.pathname === "/admin"){
    showDelete = true;
  }
  if (location.pathname === "/myset" && user) {
    showDelete = true;
  }

  const display = showDelete ? 'block' : 'none';

  const handleLike =  (setID) => {
    likeFlashcard(setID)
    window.location.reload();
  }

  return (
    <>
    <div className="sets-container">
      {sets.map((set) => (
        <>
        <div
          key={set.id}
          className="set-preview"
        >
          <div 
          onClick={() => onSetSelected(set.ID)}
          >
          <h2>{set.Navn}</h2>
          <button style = {{display:display}} onClick={(e) => handleDelete(set.ID, e)} className="delete-set-btn">X</button>
          <p>Likes: {set.Likes} </p>
          </div>
          <button className = "likeButton" onClick={() => handleLike(set.ID)} > Like </button>
        </div>
      </>
        
      ))}
    </div>
    </>
  );
};

export default FlashcardSetOverview;
