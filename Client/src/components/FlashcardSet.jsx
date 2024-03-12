import React, { useState } from 'react';
import Button from './Button';
import Flashcard from './Flashcard';
import '../styles/FlashcardSet.css';

const flashcardsData = [
  { term: 'Term 1', definition: 'Definition 1' },
  { term: 'Term 2', definition: 'Definition 2' },
  { term: 'Term 3', definition: 'Definition 3' },
];

const FlashcardSet = ({ set, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flashcardsData = JSON.parse(set.Data);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + flashcardsData.length) % flashcardsData.length
    );
  };

  return (
    <div className="flashcard-set">
      <Flashcard
        term={flashcardsData[currentIndex].term}
        definition={flashcardsData[currentIndex].definition}
      />
      <div className="controls">
        <Button onClick={handlePrevious} label="Previous" idName="prevButton" />
        <Button onClick={handleNext} label="Next" idName="nextButton" />
      </div>
    </div>
  );
};

export default FlashcardSet;
