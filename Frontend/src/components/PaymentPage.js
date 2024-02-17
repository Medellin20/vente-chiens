// PaymentPage.js
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css'; // Importez le fichier CSS

const PaymentPage = () => {

  const token = localStorage.getItem('token');

  const [surName, setsurname] = useState("");
  const [lastName, setlastname] = useState("");
  const [deliveryemail, setdeliveryemail] = useState("");
  const [email, setemail] = useState("");
  const [personnalemail, setpersonnalemail] = useState("");
  const baseUrl = 'https://homedog.onrender.com/'

  // const { index } = useParams();
  // const dog = dogs[index];


  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

  
    // Ajoutez ici la logique pour traiter le paiement
    axios
      .post(  baseUrl + "/api/payment/initiate",
        {
          surname: surName,
          lastname: lastName,
          email: email,
          deliveryemail: deliveryemail,
          personnalemail: personnalemail
        },
        {
          headers: { 'Access-Control-Allow-Origin': true, Authorization: `Bearer ${token}`, },
        })
      .then((res) => {
        console.log(res);
        alert("Paiement effectué avec succès");
        window.location = "/cmptiban"
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
      <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={surName}
            onChange={(e) => setsurname(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
          Lastname:
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e) => setlastname(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="example@gmail/hotmail/.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
          Delivery Email:
          <input
            type="text"
            name="deliveryemail"
            placeholder="example@gmail/hotmail/.com"
            value={deliveryemail}
            onChange={(e) => setdeliveryemail(e.target.value)}
            className="payment-input"
            required
          />
        </label>

        <label>
          Personnal Email:
          <input
            type="text"
            name="personnalemail"
            placeholder="example@gmail/hotmail/.com"
            value={personnalemail}
            onChange={(e) => setpersonnalemail(e.target.value)}
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
