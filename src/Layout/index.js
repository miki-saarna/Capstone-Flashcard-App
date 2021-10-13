import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { listDecks } from '../utils/api';
import CreateDeckButton from '../Deck/CreateDeckButton';
import DeckList from '../Deck/DeckList';
import CreateDeck from '../Deck/CreateDeck';
import ViewDeck from '../Deck/ViewDeck';
import NotFound from "./NotFound";
import './index.css';


function Layout() {
  const [decks, setDecks] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal)
      .then(setDecks)
      .catch(console.error);
      return () => abortController.abort();
  }, [])
  
  return (
    <>
      <Header />
      <div className="container">

        <Switch>

          {/* displays content of home URL: create deck button and deck list */}
          <Route exact path={url}>
            <CreateDeckButton />
            <DeckList decks={decks} setDecks={setDecks} />
          </Route>

          {/* route that leads to deck creation */}
          <Route exact path={`${url}decks/new`}>
            <CreateDeck decks={decks} setDecks={setDecks} />
          </Route>

          {/* route that leads to viewing deck */}
          <Route path={`${url}decks/:deckId`}>
            <ViewDeck decks={decks} setDecks={setDecks} />
          </Route>

          {/* route that leads to studying deck */}

          {/* 'not found' route */}
          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
