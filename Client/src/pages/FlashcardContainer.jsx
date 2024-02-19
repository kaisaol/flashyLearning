// FlashcardContainer.jsx
import  { useState } from 'react';
import Button from '../components/Button.jsx';
import FlashcardSet from '../components/FlashcardSet.jsx';
import FlashcardSetsOverview from '../components/FlashcardSetsOverview.jsx';

function FlashcardContainer() {
  const [currentSetId, setCurrentSetId] = useState(null);

  const handleSetSelected = (id) => {
    setCurrentSetId(id);
  };

  const flashcardSetsData = [
    {
      id: 'set1',
      title: 'Geografi',
      cards: [
         { term: 'Hva er lengste elv i Norge?', definition: 'Glomma' },
         { term: 'Hva er det høyeste fjeller i verden?', definition: 'Mount Everest' },
         { term: 'Hvilke land grenser til Norge?', definition: 'Sverige, Finland og Russland' },
         { term: 'Hvilket land har verdens lengste kystlinje?', definition: 'Canada' },
        


      ],
    },
    {
      id: 'set2',
      title: 'Spansk',
      cards: [
        { term: 'Hva betyr "Hola" på norsk?', definition: 'Hei' },
        { term: 'Hvordan sier du "Takk" på spansk?', definition: 'Gracias' },
        { term: 'Hva er navnet på Spanias hovedstad?', definition: 'Madrid' },
        { term: 'Hvordan sier du "God morgen" på spansk?', definition: 'Buenos días' },
        { term: 'Hva betyr "Adiós" på norsk?', definition: 'Farvel' },
      ]
    },
    {
      id: 'set3',
      title: 'Fransk',
      cards: [
        { term: 'Comment ça va? Oversett til norsk.', definition: 'Hvordan går det?' },
        { term: 'Hva er det franske ordet for "venn"?', definition: 'Ami(e)' },
        { term: 'Hvilket monument er et symbol på Frankrike?', definition: 'Eiffeltårnet' },
        { term: 'Hva er det franske ordet for "mat"?', definition: 'Nourriture' },
        { term: 'Hvordan sier du "God natt" på fransk?', definition: 'Bonne nuit' },
      ]
    },
    {
      id: 'set4',
      title: 'Tysk',
      cards: [
        { term: 'Was bedeutet "Guten Tag" auf Norwegisch?', definition: 'God dag' },
        { term: 'Wie sagt man "Danke" auf Deutsch?', definition: 'Danke' },
        { term: 'Welche Stadt ist die Hauptstadt von Deutschland?', definition: 'Berlin' },
        { term: 'Wie sagt man "Guten Morgen" auf Deutsch?', definition: 'Guten Morgen' },
        { term: 'Was bedeutet "Auf Wiedersehen" auf Norwegisch?', definition: 'Ha det bra' },
      ]
    },
    {
      id: 'set5',
      title: 'Teori i produkt- utvikling',
      cards: [
        { term: 'Hva er MVP i produktutvikling?', definition: 'Minimum Viable Product' },
        { term: 'Hva er forskjellen mellom waterfall og agile metodikk?', definition: 'Waterfall er lineær, mens agile er iterativ og fleksibel' },
        { term: 'Hva står UX for i produktutvikling?', definition: 'User Experience' },
        { term: 'Hvilken fase kommer før implementering i produktutviklingsprosessen?', definition: 'Design' },
        { term: 'Hva er formålet med markedsundersøkelser i produktutvikling?', definition: 'Å forstå målgruppen og markedet bedre' },
      ]
    }
  ];

  const currentSet = flashcardSetsData.find((set) => set.id === currentSetId);

  return (
    <div>
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
        <div>
        <div className="welMessage">
            <h2 className="welHeader">Welcome to Flashy, a simple learning tool</h2>
            <p className="welPara">Log in to create your own sets, or check out some of the sets below</p>
          </div>
        <FlashcardSetsOverview
          sets={flashcardSetsData}
          onSetSelected={handleSetSelected}
        />
        </div>
      )}
    </div>
  );
}

export default FlashcardContainer;
