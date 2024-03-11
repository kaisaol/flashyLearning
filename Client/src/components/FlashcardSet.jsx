import React, { useState } from 'react';
import Button from './Button';
import Flashcard from './Flashcard';
import '../styles/FlashcardSet.css';

const FlashcardSet = ({ set, onBack }) => {
  const [flashcardsData, setFlashcardsData] = useState(
    set.cards.map((card) => ({ ...card, isHard: false }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSetCompleted, setIsSetCompleted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false); // Reset the flip state
    let nextIndex = currentIndex + 1;
    if (nextIndex < flashcardsData.length) {
      setCurrentIndex(nextIndex);
    } else {
      const hardCardsOnly = flashcardsData.filter((card) => card.isHard);

      if (hardCardsOnly.length === 0) {
        setIsSetCompleted(true);
      } else {
        setFlashcardsData(
          hardCardsOnly.map((card) => ({ ...card, isHard: false }))
        );
        setCurrentIndex(0);
      }
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false); // Reset the flip state
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleMarkAsHard = () => {
    setFlashcardsData(
      flashcardsData.map((card, index) =>
        index === currentIndex ? { ...card, isHard: !card.isHard } : card
      )
    );
  };

  if (isSetCompleted) {
    return (
      <div className="flashcard-set-completed">
        <p>Set completed! Well done.</p>
      </div>
    );
  }
  return (
    <div className="flashcard-set">
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
