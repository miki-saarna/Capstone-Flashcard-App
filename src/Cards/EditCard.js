// edit specified flashcard's front or back strings

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updateCard, readDeck } from '../utils/api/index';
import NavigationLink from '../Formatting/NavigationLink'

const EditCard = ({ deck, setDeck }) => {
    const history = useHistory();
    
    const { cardId } = useParams();
    const cardToEdit = deck.cards.find((card) => card.id === parseFloat(cardId));
    const initialFormState = cardToEdit;
    
    const [formData, setFormData] = useState(initialFormState);
    
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

    const submitEditsHandler = async (event) => {
        event.preventDefault();
        await updateCard(formData)
            .then(async () => {
                await readDeck(deck.id)
                    .then(setDeck)
                    return history.push(`/decks/${deck.id}`);
                }
            )
    }

    return (
        <>  
            {/* below navigation provides technically incorrect card number */}
            <NavigationLink locationA={deck} locationB={`Edit Card ${cardId}`} />
            <h1>{deck.name}: Add Card</h1>
            <form>
                <label htmlFor='front'>Front
                    <textarea required id='front' name='front' type='textarea' placeholder='Front side of card' onChange={changeHandler} value={formData.front}></textarea>
                </label>
                <label htmlFor='back'>Back
                    <textarea required id='back' name='back' type='textarea' placeholder='Back side of card' onChange={changeHandler} value={formData.back}></textarea>
                </label>
                <button onClick={doneHandler}>Cancel</button>
                <button onClick={submitEditsHandler}>Submit</button>
            </form>
        </>
    )



}

export default EditCard;