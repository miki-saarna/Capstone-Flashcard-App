// form that accepts name and description strings, which it will use to create a new deck and post into the deck API

import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { createDeck } from '../utils/api/index';
import NavigationLink from '../Formatting/NavigationLink';

export const CreateDeck = ({ decks, setDecks }) => {
    const initialFormState = {
        name: '',
        description: '',
        cards: '',
    }

    const [formData, setFormData] = useState({...initialFormState});

    const history = useHistory();

    const changeHandler = ({ target }) => {
        setFormData({ 
            ...formData,
            [target.name]: target.value,
        })
    }
    
    // handles operation when user cancels while creating new deck
    const cancelHandler = () => {
        return history.push('/')
    }
            
    // handles operation when user submits name and description of new deck
    const submitHandler = async (event) => {
        event.preventDefault();
        await createDeck(formData)
            .then((newDeck) => {
                setDecks([...decks, newDeck])
                return history.push(`${newDeck.id}`);
            })
            .catch(console.error);
    }

    return (
        <>
            <NavigationLink locationA='Create Deck' />

            <h1>Create Deck</h1>

            <form action=''>

            <div>
                <label htmlFor='name'>
                    Name
                    <input required id='name' name='name' type='text' onChange={changeHandler} placeholder='Deck Name'></input>
                </label>
            </div>

            <div className='inputField'>
                <label htmlFor='description'>
                    Description
                    <textarea id='description' name='description' type='textarea' onChange={changeHandler} placeholder='Brief description of the deck' required></textarea>
                </label>
            </div>

            <div className='inputField'>
                <button onClick={cancelHandler}>Cancel</button>
                
                <button type='submit' onClick={submitHandler}>Submit</button>
            </div>
            </form>

        </>
    )
}

export default CreateDeck;