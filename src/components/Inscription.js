// src/components/Inscription.js
import React, { useState } from 'react';
import './Inscription.css';

const Inscription = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = () => {
    // Ajoutez votre logique d'inscription ici
    console.log(`Inscription avec username: ${username} et password: ${password}`);
    // Ajoutez la logique pour gérer l'inscription, par exemple, en envoyant les données au serveur
  };

  return (
    <div className="form-container">
      <h2>Inscription</h2>
      <form>
        <div className="label-input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="label-input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleInscription}>
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Inscription;
