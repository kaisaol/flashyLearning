import React, { useState } from 'react';
import Flashcard from './Flashcard'; 
import '../styles/FlashcardSet.css'; 

const flashcardsData = [
  { term: 'Term 1', definition: 'Definition 1' },
  { term: 'Term 2', definition: 'Definition 2' },
  { term: 'Term 3', definition: 'Definition 3' },
];

const FlashcardSet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
  };

  return (
    <div className="flashcard-set">
      <Flashcard
        term={flashcardsData[currentIndex].term}
        definition={flashcardsData[currentIndex].definition}
      />
      <div className="controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardSet;
