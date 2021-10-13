// receives every deck from 'DeckList' and processess/formats correctly with interactive buttons to view, study, delete each deck

import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';
import { deleteDeck } from '../utils/api/index';


export const DeckCard = ({ deck, setDecks }) => {

  const { url } = useRouteMatch();
  
  const deleteHandler = async () => {
    const confirmation = window.confirm(`Delete this card? You will not be able to recover it`);
    if (confirmation) {
      const abortController = new AbortController();
      await deleteDeck(deck.id, abortController.signal)
        .then(() => setDecks((remainingDecks) => remainingDecks.filter((remainingDeck) => remainingDeck.id !== deck.id)))
        .catch(console.error);
        return () => abortController.abort();
    }
  }

  if(!deck.cards) {
    return (
      <>
        <div className='summary'>
          <div className='flex'>
            <h3>{deck.name}</h3>
            <p>0 cards</p>
          </div>
          <div className='flex'>
            <p>{deck.description}</p>
          </div>
          <div className='flex'>
            <div className='flexTogether'>
              <Link className='view' to={`${url}decks/${deck.id}`}>View</Link>
              <Link className='study' to={`${url}decks/${deck.id}/study`}>Study</Link>
            </div>
            <div className='flexSelf'>
              <button className='delete' onClick={deleteHandler}></button>
            </div>
          </div>
        </div>
      </>
  )

}

  
  return (
      <>
        <div className='summary'>
          <div className='flex'>
            <h3>{deck.name}</h3>
            {deck.cards.length === 1 ?
            (<p>1 card</p>) :
            (<p>{deck.cards.length} cards</p>)}
          </div>
          <div className='flex'>
            <p>{deck.description}</p>
          </div>
          <div className='flex'>
            <div className='flexTogether'>
              <Link className='view' to={`${url}decks/${deck.id}`}>View</Link>
              <Link className='study' to={`${url}decks/${deck.id}/study`}>Study</Link>
            </div>
            <div className='flexSelf'>
              <button className='delete' onClick={deleteHandler}></button>
            </div>
          </div>
        </div>
      </>
  )

}

export default DeckCard;