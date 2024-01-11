// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import dogsData from './dogsData';
import Navbar from './components/Navbar';

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    setDogs(dogsData);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home dogs={dogs} />} />
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:index" element={<DogDetails dogs={dogs} />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
