// src/components/Connexion.js
import React, { useState } from 'react';
import axios from 'axios';
import './Connexion.css';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleConnexion = (e) => {
    // Ajoutez votre logique de connexion ici
    e.preventDefault();
    e.stopPropagation();

    // Ajoutez ici la logique pour traiter le paiement
    axios
      .post("http://localhost:4000/api/auth/login",
        {
          username: username,
          password: password,
        },
        {
          headers: { 'Access-Control-Allow-Origin': true, },
        })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.token)
        window.location = "/"
      })
      .catch((err) => {
        console.log(err);
        alert("Erreur de connexion, veillez vérifiez si votre username ou mot de passe est valide");
      });
  };

  return (
    <div className='container'>
      <div className="form-container">
        <h2>Connexion</h2>
        <form>
          <div className="label-input-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  requiered/>
          </div>
          <div className="label-input-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} requiered />
          </div>
          <button type="button" onClick={handleConnexion}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
