// src/components/DogDetails.js
import React from "react";
import { useParams } from "react-router-dom";
// import './DogDetails.css'; // Importez le fichier CSS

const DogDetails = ({ dogs }) => {
	const { index } = useParams();
	const dog = dogs[index];

	if (!dog) {
		return <div>Chien non trouvé.</div>;
	}

	return (
		<div className="flex flex-row items-center justify-center">
			<div className="flex flex-col p-4 rounded-lg shadow-lg space-y-4">
				<img
					className="rounded-lg"
					src={`/images/${dog.image}`}
					alt={dog.name}
				/>
				<div className="flex flex-col space-y-2">
					<div className="">Race: {dog.breed}</div>
					<div className="">Prix: {dog.price}€</div>
					<div className="">{dog.caption}</div>
				</div>
			</div>
		</div>
	);
};

export default DogDetails;
