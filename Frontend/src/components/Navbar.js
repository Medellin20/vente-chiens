// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Fonction pour gérer le défilement de la page
    const handleScroll = () => {
      const stickyValue = document.getElementById('navbar').offsetTop;

      if (window.pageYOffset >= stickyValue) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Ajouter un écouteur d'événements pour le défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const token = localStorage.getItem('token');
  const isConnected = !!token;

  return (
    <nav className={`animated ${isSticky ? 'sticky' : ''}`} id="navbar">
      {/* Ajouter la classe 'animated' pour les animations d'animate.css */}
      <div className='nav-content'>
        <Link to="/">
          <span>
            <img className='logo-taille' src={`/images/image.png`} alt="LOGO" />
            HOMEDOG
          </span>
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/dogs">Chiens à vendre</Link>
          </li>
          {!isConnected && (
            <>
              <li>
                <Link to="/inscription">Inscription</Link>
              </li>
              <li>
                <Link to="/connexion">Connexion</Link>
              </li>
            </>
          )}
          {isConnected && (
            <li>
              <Link to="/deconnexion">Deconnexion</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
