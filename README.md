
# Flashcard Application

### Table of Contents

- [Live Application](#live-application)
- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Application Features](#application-features)
- [License](#license)
- [Author Info](#author-info)

## Live Application

This application can be viewed here: https://boiling-crag-17920.herokuapp.com

## Description

This application is a digital flashcard study tool. Rather than purchasing flashcards and handwriting on the front and back of each card, this application allows you to digitally create different decks for different topics with as many flashcards as possible for each deck. Decks and cards can be edited or deleted as needed, and simple button components allow each card to be easily read and flipped.

![Homepage of the flashcard app](/images/home-page.png)

## Technologies

- React
- React Hooks
- React function components that follow the _Single Responsibility Principle_
- React routes, including nested routes, using React Router
- Calling external APIs
- Bootstrap styling CSS

## How To Use

#### Installation:

1. Fork and clone this repository
2. Run `npm install` to install project dependencies
3. Run `npm start` to start your server

## Application Features

### Create Deck

A create deck button on the homepage allows you to create a new deck by filling out an input field for the name of the deck and another input field for the description of the deck.

### View Deck

Viewing the deck will take you to deck page, which shows the title and description of the deck, the front and back of each card belonging to the deck, and buttons for studying, editing, deleting, and adding cards.

### Study Deck

Studying the deck will take you through an iteration of each card. Buttons are available to flip to the other side of each card or to proceed to the next card. A restart prompt appears after the final card.

### Breadcrumb Navigation Bar

A navigation bar appears near the top of each route (excluding the homepage "/"). This breadcrumb-style navigation bar allows you to easily navigate to the previous page or homepage as needed.

![Study page of the flashcard app](/images/study-page.png)

## License

MIT License

Copyright (c) [2021] [Miki Saarna]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author Info


- GitHub: [miki-saarna](https://github.com/miki-saarna)
- LinkedIn: [Mikito Saarna](https://www.linkedin.com/in/mikito-saarna/)
- Website: [MikiSaarna.com](https://MikiSaarna.com)

[Back To The Top](#pomodoro-timer)