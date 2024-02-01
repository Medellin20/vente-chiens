// src/components/DogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css'; // Importez le fichier CSS

const DogDetails = ({ dogs }) => {
  const { index } = useParams();
  const dog = dogs[index];

  if (!dog) {
    return <div>Chien non trouvé.</div>;
  }

  return (
    <div className="dog-details-container">
      <div className="dog-details-content">
        <img className="dog-details-image" src={`/images/${dog.image}`} alt={dog.name} />
        <div className="dog-details-info">
          <div className="dog-details-breed">Race: {dog.breed}</div>
          <div className="dog-details-price">Prix: {dog.price}€</div>
          <div className="dog-details-caption">{dog.caption}</div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
