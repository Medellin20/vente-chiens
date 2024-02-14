// src/components/DogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ dogs }) => {

  const token = window.localStorage.getItem('token')

  const handleBuyNowClick = (index) => {
    // Ajoutez votre logique pour l'action "Acheter maintenant" ici
    console.log(`Acheter maintenant le chien ${index}`);

    if (!token) {
      window.location = `/inscription`;
    }
    else {
      window.location = `/payment`;
    }
  };

  const handleMoreInfoClick = (index) => {
    // Ajoutez votre logique pour l'action "Plus d'informations" ici
    console.log(`Plus d'informations sur le chien ${index}`);
    window.location = `/dogs/${index}`;
  };


  return (
    <div className='dog-container'>
      <h2>Voici notre sélection</h2>
      <div className="dog-list">
        {dogs.map((dog, index) => (
          <div key={index} className="dog-item">
              <div>
                <img
                  src={`/images/${dog.image}`}
                  alt={dog.name}
                  className="dog-image"
                  />
              </div>
            <div className="dog-details">
              <div className='dog-breed-price-container'>
                <span className="dog-price">{dog.price}€</span>
              </div>
             
            </div>
            <div className="action-buttons">
              <Link>
                <button className="more-info-button" onClick={() => handleMoreInfoClick(index)}>
                  Voir les détails
                </button>
              </Link>
              <Link>
                <button className="buy-now-button" onClick={() => handleBuyNowClick(index)}>
                  Acheter
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
