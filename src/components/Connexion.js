// src/components/Connexion.js
import React, { useState } from 'react';
import './Connexion.css';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleConnexion = () => {
    // Ajoutez votre logique de connexion ici
    console.log(`Connexion avec username: ${username} et password: ${password}`);
    // Ajoutez la logique pour gérer la connexion, par exemple, en envoyant les données au serveur
  };

  return (
    <div className="form-container">
      <h2>Connexion</h2>
      <form>
        <div className="label-input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="label-input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleConnexion}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Connexion;
