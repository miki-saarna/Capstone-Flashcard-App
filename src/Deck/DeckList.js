// maps over array of decks and sends each deck object to 'DeckSummary' component for processing/formatting

import React from 'react';
import DeckSummary from './DeckSummary';

export const DeckList = ({ decks, setDecks, setDeckCards }) => {  

  const listOfDecks = decks.map((deck) => <DeckSummary key={deck.id} deck={deck} setDecks={setDecks} />);

  return (
    <>
      {listOfDecks}
    </>
  )
}

export default DeckList;