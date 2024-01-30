// PaymentPage.js
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Cmptiban.css'; // Importez le fichier CSS

const Cmptiban = () => {

  const token = localStorage.getItem('token');

  const [displayRIB, setDisplayRIB] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDisplayRIB("RIB : 1235 4587 4596 2541")
      
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
      <label>
      <h2 className='zola'> Paiement sécurisé : </h2>
            
      <p>  Faites un virement depuis votre compte bancaire vers votre compte HOMEDOG (RIB ci-dessous). 
            Vous recevrez un message de confirmation dès réception des fonds. 
            La réception des fonds peut prendre jusqu’à 48h ouvrées. 
            Pour accélérer la démarche, demandez un virement express auprès de votre banquier.</ p>
          
        
        </label>   

        
        <button type="submit" className="payment-button" onClick={handleSubmit}>Afficher le RIB pour le paiement</button>
      </form>
    
      <p> <h3> {displayRIB} </h3>  </p>
    </div>
  );
};

export default Cmptiban;
