import React from 'react';
import { NavLink } from 'react-router-dom';
import profil from "../images/profil.png";
import chat from "../images/chat.png";
import loupe from "../images/loupe.png";
import "./Navbar.css";

function Navbar() {
    const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;
    return (
        <div className="navbar">            
            {link('/profile', <img className="profil" src={profil} alt="Profil" />)}
            {link('/chat', <img className="chat" src={chat} alt="Chat" />)}
            {link('/search', <img className="loupe" src={loupe} alt="Recherche" />)}
        </div>
    )
}

export default Navbar;
