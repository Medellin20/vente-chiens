// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Home = ({ dogs }) => {


  return (
    <div className='home-container'>
      <div className="textalign">
        <h2 className="animated infinite bounce">Bienvenue sur notre site de vente de chiens !</h2></div>
      <div className="ttalign"> <p>Découvrez nos adorables chiens disponibles pour la vente </p> </div>
      <div className="home-dog-list">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
        >
          <Masonry gutter='10px'>
            {dogs.map((dog, index) => (
              <div key={index} className="home-dog-item">
                <Link to={`/dogs/${index}`} className="home-dog-link">
                  <img
                    src={`/images/${dog.image}`}
                    alt={dog.name}
                    className="home-dog-image"
                  />
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Home;
