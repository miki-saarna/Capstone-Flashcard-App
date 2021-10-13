// edit name and/or description fields of a specified deck

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateDeck } from '../utils/api/index';
import NavigationLink from '../Formatting/NavigationLink';

const EditDeck = ({ deck, setDeck, setDecks }) => {
    
    

    const initialFormState = {
        name: deck.name,
        description: deck.description,
        id: deck.id,
        cards: deck.cards
    }
    const [formData, setFormData] = useState({...initialFormState});
    
    const history = useHistory();
   
    const cancelHandler = () => {
        history.push(`/decks/{deck.id}`)
    }

    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        await updateDeck(formData)
        .then((updatedDeck) => {
            setDeck(updatedDeck);
            // seems like a very tedious solution below... explore other solutions...
            setDecks((decks) => [...decks.filter(deck => deck.id !== updatedDeck.id), updatedDeck])
            return history.push(`/decks/${deck.id}`)
        })
    }

    return (
        <>
            <NavigationLink locationA={deck} locationB={'Edit Deck'} />
            <h1>Create Deck</h1>

            <form>

            {/* <div> */}
                <label htmlFor='name'>
                    Name
                    <input id='name' name='name' type='text' placeholder='Deck Name' onChange={changeHandler} value={formData.name}></input>
                </label>
            {/* </div> */}

            {/* <div className='inputField'> */}
                <label htmlFor='description'>
                    Description
                    <textarea id='description' name='description' type='textarea' placeholder='Brief description of the deck' onChange={changeHandler} value={formData.description}></textarea>
                </label>
            {/* </div> */}

            <div className='inputField'>
                <button required onClick={cancelHandler}>Cancel</button>
                <button required onClick={submitHandler}>Submit</button>
            </div>
            </form>

        </>
    )
}

export default EditDeck;