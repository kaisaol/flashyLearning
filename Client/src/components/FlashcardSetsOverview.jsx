import '../styles/FlashcardSetsOverview.css';

const FlashcardSetOverview = ({ sets, onSetSelected }) => {
  return (
    <div className="sets-container">
      {sets.map((set) => (
        <div
          key={set.id}
          onClick={() => onSetSelected(set.id)}
          className="set-preview"
        >
          <h2>{set.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default FlashcardSetOverview;
