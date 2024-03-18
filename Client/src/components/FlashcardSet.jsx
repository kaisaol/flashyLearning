import React, { useState } from 'react';
import Button from './Button';
import Flashcard from './Flashcard';
import '../styles/FlashcardSet.css';

const FlashcardSet = ({ set, onBack }) => {
  const cards = JSON.parse(set.Data)
  const [flashcardsData, setFlashcardsData] = useState(
    cards.map((card) => ({ ...card, isHard: false }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSetCompleted, setIsSetCompleted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndexClone, setClone] = useState(0);

    
 

  const handleNext = () => {
    setIsFlipped(false); // Reset the flip state
    let nextIndex = currentIndex + 1;
    let nxtClone = currentIndexClone +1;
    if (nextIndex < flashcardsData.length) {
      setCurrentIndex(nextIndex);
      setClone(nxtClone);
    } else {
      const hardCardsOnly = flashcardsData.filter((card) => card.isHard);

      if (hardCardsOnly.length === 0) {
        setIsSetCompleted(true);
      } else {
        setFlashcardsData(
          hardCardsOnly.map((card) => ({ ...card, isHard: false }))
        );
        setClone(nxtClone);
        setCurrentIndex(0);
        
      }
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false); // Reset the flip state
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setClone((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const [len, setLen]  = useState(flashcardsData.length);

  const handleMarkAsHard = () => {
    setFlashcardsData(
      flashcardsData.map((card, index) =>
        index === currentIndex ? { ...card, isHard: !card.isHard } : card
      )
    );
    setLen(len + 1);
  };

  const progress = ((currentIndexClone + 1) / len) * 100;

  if (isSetCompleted) {
    return (
      <div className="flashcard-set-completed">
        <p>Set completed! Well done.</p>
      </div>
    );
  }
  return (
    <div className="flashcard-set">
      {/* Progress bar */}
      <div className="progress-bar-container" style={{ width: '100%', backgroundColor: '#eee' }}>
        <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: 'green', height: '20px' }}></div>
      </div>
      
      <Flashcard
        key={currentIndex}
        term={flashcardsData[currentIndex].term}
        definition={flashcardsData[currentIndex].definition}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <div className="controls">
        <Button onClick={handlePrevious} label="Previous" idName="prevButton" />
        <Button onClick={handleNext} label="Next" idName="nextButton" />
        <Button
          onClick={handleMarkAsHard}
          label={
            flashcardsData[currentIndex].isHard
              ? 'Unmark as Hard'
              : 'Mark as Hard'
          }
        />
      </div>
    </div>
  );
};

export default FlashcardSet;
