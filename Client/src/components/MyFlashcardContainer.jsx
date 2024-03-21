// FlashcardContainer.jsx
import '../styles/FlashcardContainer.css';
import { useEffect, useState } from 'react';
import Button from '../components/Button.jsx';
import FlashcardSet from '../components/FlashcardSet.jsx';
import FlashcardSetsOverview from '../components/FlashcardSetsOverview.jsx';

function MyFlashcardContainer({ oppdaterSetValgt, getData, onDelete }) {
  const [currentSetId, setCurrentSetId] = useState(null);

  const handleSetSelected = (id) => {
    setCurrentSetId(id);
  };

  useEffect(() => {
    if (currentSetId) {
      oppdaterSetValgt(true);
    } else {
      oppdaterSetValgt(false);
    }
  }, [currentSetId, oppdaterSetValgt]);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };


  const mockData = [
    {
      id: 'set1',
      title: 'Geografi',
      likes: 0,
      Data: JSON.stringify([
        { term: 'Hva er lengste elv i Norge?', definition: 'Glomma' },
        {
          term: 'Hva er det høyeste fjellet i verden?',
          definition: 'Mount Everest',
        },
        {
          term: 'Hvilke land grenser til Norge?',
          definition: 'Sverige, Finland og Russland',
        },
        {
          term: 'Hvilket land har verdens lengste kystlinje?',
          definition: 'Canada',
        },
      ]),
    },
  ];

  const flashcardSets = (getData ? getData : mockData)
  const currentSet = flashcardSets.find((set) => set.ID === currentSetId);
  const shuffledCards = currentSet ? shuffleArray([...JSON.parse(currentSet.Data)]) : [];


  return (
    <div className="flashcardContainer">
      {currentSetId && (
        <Button
          onClick={() => handleSetSelected(null)}
          label="Back to Overview"
          idName="backButton"
        />
      )}
      {currentSetId ? (
        <FlashcardSet set={{ ...currentSet, Data: shuffledCards }} />
      ) : (
        <FlashcardSetsOverview
          sets={flashcardSets}
          onSetSelected={handleSetSelected}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

export default MyFlashcardContainer;
