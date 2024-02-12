// Achat.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './achat.css'; // Importez le fichier CSS

const Achat = ({ dogs }) => {
  const { index } = useParams();
  const dog = dogs[index];

  if (!dog) {
    return <div>Chien non trouvé.</div>;
  }

  return (
    <div className="achat-container">
      <div className="achat-details">
        <img className="achat-image" src={`/images/${dog.image}`} alt={dog.name} />
        <h2 className="achat-title">Acheter {dog.name}</h2>
        {/* Ajoutez d'autres informations d'achat ici si nécessaire */}
      </div>
    </div>
  );
};

export default Achat;
