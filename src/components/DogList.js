// src/components/DogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ dogs }) => {
  const handleBuyNowClick = (index) => {
    // Ajoutez votre logique pour l'action "Acheter maintenant" ici
    console.log(`Acheter maintenant le chien ${index + 1}`);
  };

  const handleMoreInfoClick = (index) => {
    // Ajoutez votre logique pour l'action "Plus d'informations" ici
    console.log(`Plus d'informations sur le chien ${index + 1}`);
  };

  return (
    <div>
      <h2>Voici notre sélection</h2>
      <div className="dog-list">
        {dogs.map((dog, index) => (
          <div key={index} className="dog-item">
            <Link to={`/dogs/${index}`}>
              <img
                src={`/images/${dog.image}`}
                alt={dog.name}
                className="dog-image"
              />
            </Link>
            <div className="dog-details">
              <div>
                <span className="dog-name">{dog.name}</span>
                <span className="dog-breed">{dog.breed}</span>
              </div>
              <div>
                <span className="dog-price">${dog.price}</span>
                <p className="dog-caption">{dog.caption}</p>
              </div>
            </div>
            <div className="action-buttons">
              <Link to={`/achat`}>
                <button className="buy-now-button" onClick={() => handleBuyNowClick(index)}>
                  Acheter maintenant
                </button>
              </Link>
              <Link to={`/dogs/${index}`}>
                <button className="more-info-button" onClick={() => handleMoreInfoClick(index)}>
                  Plus d'informations
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
