// src/components/DogDetails.js
import React from 'react';

const DogDetails = ({ dogs, match }) => {
  const dog = dogs[match.params.index];
  return (
    <div>
      <h2>Détails de {dog.name}</h2>
      <p>Race: {dog.breed}</p>
      <p>Prix: {dog.price}</p>
    </div>
  );
};

export default DogDetails;
