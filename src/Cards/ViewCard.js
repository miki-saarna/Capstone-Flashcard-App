// formats each card list for the 'ViewDeck' component

import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { deleteCard, readDeck } from '../utils/api/index';
import NotFound from '../Layout/NotFound';

export const ViewCard = ({ cardList, setDeck }) => {

    const { url } = useRouteMatch();

    // issues with map function if I didn't define the following below, which only acts as a placeholder to avoid error at the map function:
    // is there a way to avoid this???
    if(!cardList) {
        return (
            <NotFound />
            )
        } else {
            const cards = cardList.map((card) => {
                const cardId = card.id;
                
                const deleteHandler = async () => {
                    const confirmation = window.confirm(`Delete this card? You will not be able to recover it`)
                    if(confirmation) {
                        await deleteCard(cardId)
                            .then(async () => {
                                await readDeck(card.deckId)
                                    .then(setDeck)
                            })
                    }
                }
            return (
                // is this adequate solution to solve key id problem???
                <div key={cardId} className='cardList'>
                    <div className='questionAnswer'>
                        <p>{card.front}</p>
                        <p>{card.back}</p>
                    </div>
                    <div>
                        <Link className='edit' to={`${url}/cards/${card.id}/edit`}>Edit</Link>
                        <button className='delete' onClick={deleteHandler}></button>
                    </div>
                </div>
            )})
    return (
        <>
            {cards}
        </>
    )
    }
}


export default ViewCard;