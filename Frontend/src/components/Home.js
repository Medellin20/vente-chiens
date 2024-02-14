// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
// import './Home.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Home = ({ dogs }) => {
	return (
		<div className="mx-auto flex flex-col space-y-4 lg:w-8/12 md:w-10/12 w-full px-2">
			<div className="textalign">
				<h2 className="text-lg">
					Bienvenue sur notre site de vente de chiens !
				</h2>
			</div>
			<div className="ttalign">
				{" "}
				<p>Découvrez nos adorables chiens disponibles pour la vente </p>{" "}
			</div>
			<div className="home-dog-list">
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
				>
					<Masonry gutter="10px">
						{dogs.map((dog, index) => (
							<div key={index} className="home-dog-item">
								<Link to={`/dogs/${index}`} className="home-dog-link">
									<img
										src={`/images/${dog.image}`}
										alt={dog.name}
										className="w-full"
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
