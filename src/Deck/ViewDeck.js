// creates 'view' of a specified deck

import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch, useHistory, Link, Switch, Route } from 'react-router-dom';
import { readDeck, deleteDeck } from '../utils/api/index';
import ViewCard from '../Cards/ViewCard';
import StudyCard from '../Cards/StudyCard';
import EditDeck from './EditDeck';
import CreateCard from '../Cards/CreateCard';
import EditCard from '../Cards/EditCard';
import NavigationLink from '../Formatting/NavigationLink';

export const ViewDeck = ({ decks, setDecks }) => {
  const [deck, setDeck] = useState([]);
  
  const { url } = useRouteMatch();
  const history = useHistory();
  
  const { deckId } = useParams();
  
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal)
    .then(setDeck)
    .catch(console.error)
    return () => abortController.abort();
  }, [])

  const deleteHandler = async () => {
    const confirmation = window.confirm(`Delete this card? You will not be able to recover it`);
    if(confirmation) {
        const abortController = new AbortController();
        await deleteDeck(deckId, abortController.signal)
            .then(() => {setDecks((remainingDecks) => remainingDecks.filter((remainingDeck) => remainingDeck.id != deckId))
                return history.push('/');
            })
            .catch(console.error)
        return () => AbortController.abort();
    }
  }

  const navigationLinkDeck = decks.find(deck => deck.id == deckId);

  return (
      <>
        <Switch>
            <Route exact path={url}>
            {navigationLinkDeck ?
            (<NavigationLink locationA={navigationLinkDeck.name} />) :
            (null)}
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <div className='flex'>
                    <div>
                        <Link className='edit' to={`${url}/edit`}>Edit</Link>
                        <Link className='study' to={`${url}/study`}>Study</Link>
                        <Link className='plus addCard' to={`${url}/cards/new`}>Add Cards</Link>
                    </div>
                    <div>
                        <button className='delete' onClick={deleteHandler}></button>
                    </div>
                </div>
                <h2>Cards</h2>
                <ViewCard cardList={deck.cards} setDeck={setDeck} />
              </Route>
              {deck.id ?
              (<Route path={`${url}/study`}>
                  <StudyCard deck={deck} />
              </Route>) :
              (<p>Loading...</p>)
              }
              <Route path={`${url}/edit`}>
                  <EditDeck deck={deck} setDeck={setDeck} setDecks={setDecks} />
              </Route>
              <Route path={`${url}/cards/new`}>
                  <CreateCard deck={deck} setDeck={setDeck} />
              </Route>
              <Route path={`${url}/cards/:cardId/edit`}>
                  <EditCard deck={deck} setDeck={setDeck} />
              </Route>
        </Switch>
      </>
  )
}

export default ViewDeck;