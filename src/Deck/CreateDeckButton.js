// Adds the 'Create Deck' button/link on the homepage

import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';

export const CreateDeckButton = () => {
    const { url } = useRouteMatch();

    return <Link className='plus' to={`${url}decks/new`}>Create Deck</Link>
}

export default CreateDeckButton;


