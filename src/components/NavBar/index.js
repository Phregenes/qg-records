import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    
    <header className="navbar">
      <div className="SocialMedia">
        <a className="btninsta" href="https://www.instagram.com/mapesmoking/" />
        <a className="btnspotify" href="https://link.tospotify.com/01Yuyvmuhbb"/>
        <a className="btnwhatsapp" href="https://chat.whatsapp.com/EJmz6t8oqhhGTD1BspMNRv"/>
      </div>
    </header>
  );
}

export default NavBar;
