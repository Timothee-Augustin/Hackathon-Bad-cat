import React from 'react';
import profil from "../img/profil.png";
import chat from "../img/chat.png";
import loupe from "../img/loupe.png";
import "./Navbar.css";


function Navbar() {
    return (
        <div className="navbar">            
            <img className="profil" src={profil} alt="Profil" />
            <img className="chat" src={chat} alt="Chat" />
            <img className="loupe" src={loupe} alt="Recherche" />
        </div>
    )
}

export default Navbar;
