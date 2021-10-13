// form that accepts front and back strings for index cards, which will be used to post new cards for specific deckIds

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createCard, readDeck } from '../utils/api/index';
import NavigationLink from '../Formatting/NavigationLink';

const CreateCard = ({ deck, setDeck }) => {
    
    
    // const cardList = deck.cards;
    // const editCard = cardList.find((card) => card.id === parseFloat(cardId));
    const history = useHistory();
    
    const initialFormState = {
        front: '',
        back: '',
        deckId: deck.id,
    };

    const [formData, setFormData] = useState({...initialFormState});
    
    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
    }

    const doneHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deck.id}`);
    }

    const saveCardHandler = async (event) => {
        event.preventDefault();
        await createCard(deck.id, formData)
            .then(async () => {
                await readDeck(deck.id)
                    .then(setDeck);
            })
        setFormData(initialFormState);
    }
    
    return (
        <>  
            <NavigationLink locationA={deck} locationB={'Add Card'} />
            <h1>{deck.name}: Add Card</h1>
            <form>
                <label htmlFor='front'>Front
                    <textarea required id='front' name='front' type='textarea' placeholder='Front side of card' onChange={changeHandler} value={formData.front}></textarea>
                </label>
                <label htmlFor='back'>Back
                    <textarea required id='back' name='back' type='textarea' placeholder='Back side of card' onChange={changeHandler} value={formData.back}></textarea>
                </label>
                <button onClick={doneHandler}>Done</button>
                <button onClick={saveCardHandler}>Save</button>
            </form>
        </>
    )
    


}

export default CreateCard;