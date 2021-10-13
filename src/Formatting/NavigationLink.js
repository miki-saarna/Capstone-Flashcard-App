// used to create the breakcrumb navigation links for this app

import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationLink.css';


const NavigationLink = ({ locationA, locationB }) => {

    const [linkA, setLinkA] = useState(locationA);
    const [linkB, setLinkB] = useState(locationB);
    
    return(
            <nav>
                <ul>
                    <li><Link className='link home' to='/'>Home</Link></li>
                    {linkB ?
                    (<><li><Link className='link' to={`/decks/${linkA.id}`}>{linkA.name}</Link></li><li className='notlink'>{linkB}</li></>) :
                    (<li className='notlink'>{linkA}</li>)}
                </ul>
            </nav>
    )
}
            export default NavigationLink;
            