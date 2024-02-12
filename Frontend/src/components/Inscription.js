// src/components/Inscription.js
import React, { useState } from 'react';
import axios from 'axios';
import './Inscription.css';

const Inscription = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = (e) => {
    // Ajoutez votre logique d'inscription ici
    e.preventDefault();
    e.stopPropagation();

    // Ajoutez ici la logique pour traiter le paiement
    axios
      .post("http://localhost:4000/api/auth/register",
        {
          username: username,
          password: password,
        },
        {
          headers: { 'Access-Control-Allow-Origin': true, },
        })
      .then((res) => {
        console.log(res);
        alert("Inscription effectuée avec succès");
        window.location = "/connexion"
      })
      .catch((err) => {
        console.log(err);
        alert("Erreur lors de l'inscription");
      });
  };

  return (
    <div className='container'>
      <div className="form-container">
        <h2>Inscription</h2>
        <form>
          <div className="label-input-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Un seul mot, en minuscules"/>
          </div>
          <div className="label-input-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="8 caractères"/>
          </div>
          <button type="button" onClick={handleInscription}>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
