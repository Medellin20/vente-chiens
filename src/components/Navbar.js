// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="animated"> {/* Ajouter la classe 'animated' pour les animations d'animate.css */}
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/dogs">Chiens à vendre</Link>
        </li>
        <li>
          <Link to="/inscription">Inscription</Link>
        </li>
        <li>
          <Link to="/connexion">Connexion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
