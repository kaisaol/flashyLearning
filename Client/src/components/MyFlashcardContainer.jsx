// FlashcardContainer.jsx
import '../styles/FlashcardContainer.css';
import { useEffect, useState } from 'react';
import Button from '../components/Button.jsx';
import FlashcardSet from '../components/FlashcardSet.jsx';
import FlashcardSetsOverview from '../components/FlashcardSetsOverview.jsx';

function MyFlashcardContainer({oppdaterSetValgt, getData}) {
  const [currentSetId, setCurrentSetId] = useState(null);

  const handleSetSelected = (id) => {
    setCurrentSetId(id);
  };

  useEffect(() => {
    if(currentSetId) {
      oppdaterSetValgt(true);
    } else {
      oppdaterSetValgt(false);
    }
  }, [currentSetId, oppdaterSetValgt]);

  const mockData = [
    {
      id: 'set1',
      title: 'Geografi',
      cards: [
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
      ],
    },
    
    
  ];

  const flashcardSetsData = getData ? [getData()] : mockData;
  const currentSet = flashcardSetsData.find((set) => set.id === currentSetId);

  return (
    <div className='flashcardContainer'>
      {currentSetId && (
        <Button
          onClick={() => handleSetSelected(null)}
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

export default MyFlashcardContainer;
