// PaymentPage.js
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css'; // Importez le fichier CSS

const PaymentPage = () => {

  const token = localStorage.getItem('token');

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  // const { index } = useParams();
  // const dog = dogs[index];


  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // if (cardNumber.length > 16) {
    //   cardNumber = cardNumber.slice(0,16)
    // }

    // Ajoutez ici la logique pour traiter le paiement
    axios
      .post("http://localhost:4000/api/payment/initiate",
        {
          cardNumber: cardNumber,
          expirationDate: expirationDate,
          cvv: cvv,
          cardholderName: name,
        },
        {
          headers: { 'Access-Control-Allow-Origin': true, Authorization: `Bearer ${token}`, },
        })
      .then((res) => {
        console.log(res);
        alert("Paiement effectué avec succès");
        window.location = "/"
      })
      .catch((err) => {
        console.log(err);
        alert("Erreur lors du paiement");
      });
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="number" 
            maxLength={16}
            name="cardNumber"
            value={cardNumber.slice(0,16)}
            onChange={(e) => setCardNumber(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
         Expiration Date:
          <input
            type="date"
            name="expirationDate"
            max="yyyy-mm-dd"
            value={expirationDate.slice(0,10)}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={cvv.slice(0,3)}
            onChange={(e) => setCvv(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <button type="submit" className="payment-button" onClick={handleSubmit}>Payer</button>
      </form>
    </div>
  );
};

export default PaymentPage;
