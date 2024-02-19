// FlashcardContainer.jsx
import React, { useState } from 'react';
import Button from './Button.jsx';
import FlashcardSet from './FlashcardSet';
import FlashcardSetsOverview from './FlashcardSetsOverview';

function FlashcardContainer() {
  const [currentSetId, setCurrentSetId] = useState(null);

  const handleSetSelected = (id) => {
    setCurrentSetId(id);
  };

  const flashcardSetsData = [
    {
      id: 'set1',
      title: 'Math',
      cards: [{ term: 'Term 1', definition: 'Definition 1' }],
    },
    {
      id: 'set2',
      title: 'Science',
      cards: [
        { term: 'Term 1', definition: 'Definition 1' },
        { term: 'Term 6', definition: 'Definition 6' },
      ],
    },
  ];

  const currentSet = flashcardSetsData.find((set) => set.id === currentSetId);

  return (
    <div>
      {currentSetId && (
        <Button
          onClick={() => setCurrentSetId(null)}
          label="Back to Overview"
          idName="backButton"
        />
      )}
      {currentSetId ? (
        <FlashcardSet set={currentSet} />
      ) : (
        <FlashcardSetsOverview
          sets={flashcardSetsData}
          onSetSelected={handleSetSelected}
        />
      )}
    </div>
  );
}

export default FlashcardContainer;
