import { useState } from 'react';
import '../styles/Flashcard.css';

const Flashcard = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = ['#ffc0cb', '#b0e0e6', '#ffff99', '#99cc99'];

  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);
  return (
    <div
      className="card"
      style={{ 'background-color': color }}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className="tittel">{isFlipped ? definition : term}</div>
    </div>
  );
};

export default Flashcard;
