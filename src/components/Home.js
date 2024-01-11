// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ dogs }) => {
  return (
    <div>
      <div class="textalign">
      <h2 className="animated infinite bounce">Bienvenue sur notre site de vente de chiens !</h2></div>
      <div class="ttalign"> <p>Découvrez nos adorables chiens disponibles pour la vente </p> </div>
      <ul className="home-dog-list">
        {dogs.map((dog, index) => (
          <li key={index} className="home-dog-item">
            <Link to={`/dogs/${index}`} className="home-dog-link">
              <img
                src={`/images/${dog.image}`}
                alt={dog.name}
                className="home-dog-image"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
