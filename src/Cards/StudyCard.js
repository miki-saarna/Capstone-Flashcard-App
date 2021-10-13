// allows user to study the flashcard by flipping between front and back of each card

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './StudyCard.css';
import NavigationLink from '../Formatting/NavigationLink';

export const StudyCard = ({ deck }) => {

    const cards = deck.cards
    // const currentCard = 1;
    // const show = null;
    // const initialFormState = {
    //     counter: 0,
    //     showAnswer: false,
    //     currentCard: {},
    //     show: null,
    // }

    
    // const [formData, setFormData] = useState(
        //     {
            //         ...initialFormState,
            //         ['currentCard']: cards[initialFormState.counter], 
            //         ['show']: cards[initialFormState.counter].front,
            //     })
            
            //     console.log(formData)
            
            // do I need both showAnswer and show???
    const [counter, setCounter] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentCard, setCurrentCard] = useState(cards[counter]);
    const [show, setShow] = useState('front');
    
    const history = useHistory();

    const createCardHandler = () => {
        <Link to={history.push(`/decks/${deck.id}/cards/new`)}></Link>
    }

    if(cards.length < 3) {
        return (
            <>
                <NavigationLink locationA={deck} locationB={'Study'} />
                <h1>{deck.name}: Study</h1>
                <h2>Not enough cards.</h2>
                {cards.length === 1 ? 
                (<p>You need at least 3 cards to study. There is 1 card in this deck.</p>) :
                (<p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>)}
                <button className='addCard' onClick={createCardHandler}>Add Cards</button>
            </>
        )
    }
    
    const flipHandler = () => {
        // showAnswer ? setShow(currentCard['front']) : setShow(currentCard['back']);
        showAnswer ? setShow('front') : setShow('back');
        showAnswer ? setShowAnswer(false) : setShowAnswer(true);
        // if(formData.showAnswer) {
        // setFormData({
        //         ...formData,
        //         ['show']: formData.currentCard.front,
        //         ['showAnswer']: false,
        //     })
        // } else {
        //     setFormData({
        //         ...formData,
        //         ['show']: formData.currentCard.back,
        //         ['showAnswer']: true,
        // })
    // }
}
    
    const nextCardHandler = () => {
        if(counter === 2) {
            const confirmation = window.confirm('Restard cards? Click "cancel" to return to the home page');
            if(confirmation) {
                setCounter(0);
                setShowAnswer(false);
                setCurrentCard(cards[0]);
                setShow('front')
            } else { 
                setCounter(0)
                setShowAnswer(false)
                setCurrentCard(cards[0])
                setShow('front')
                history.push('/') }
        } else {
        setCounter((currentNumber) => ++currentNumber);
        setCurrentCard(cards[counter + 1]);
        setShow('front');
        setShowAnswer(false);
        // setFormData({
            // ...formData,
            // ['counter']: ++formData.counter,
            //     ['currentCard']: cards[formData.counter += 1],
            //     ['show']: formData.currentCard.front,
            // })
            // setCounter((currentNumber) => ++currentNumber);
        }
    }

        
    if(showAnswer) {
    return (
        <>
            <NavigationLink locationA={deck} locationB={'Study'} />
            <h1>{deck.name}: Study</h1>
            <div className='flashCard'>
                <h4>Card {counter + 1} of {cards.length}</h4>
                {/* <h4>Card {card.id} of {cards.length}</h4> */}
                <p>{currentCard[show]}</p>
                <button className='flip' onClick={flipHandler}>Flip</button>
                <button className='next' onClick={nextCardHandler}>Next</button>
            </div>
        </>
    )
    } else {
        return (
            <>
                <NavigationLink locationA={deck} locationB={'Study'} />
                <h1>{deck.name}: Study</h1>
                <div className='flashCard'>
                    <h4>Card {counter + 1} of {cards.length}</h4>
                    {/* <h4>Card {card.id} of {cards.length}</h4> */}
                    <p>{currentCard[show]}</p>
                    <button className='flip' onClick={flipHandler}>Flip</button>
                    {/* <button onClick={nextCardHandler}>Next</button> */}
                </div>
            </>
        )
    }
}

export default StudyCard;