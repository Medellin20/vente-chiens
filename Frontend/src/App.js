// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";
import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import dogsData from "./dogsData";
import Navbar from "./components/Navbar";
import Achat from "./components/achat";
import PaymentPage from "./components/PaymentPage";
import Logout from "./components/Logout";
import Cmptiban from "./components/Cmptiban";

function App() {
	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		setDogs(dogsData);
	}, []);

	return (
		<Router>
			<div>
				<Navbar />
				<div className="pt-36 pb-2">
					<Routes>
						<Route path="/" element={<Home dogs={dogs} />} />
						<Route path="/dogs" element={<DogList dogs={dogs} />} />
						<Route path="/achat/:index" element={<Achat dogs={dogs} />} />
						<Route path="/dogs/:index" element={<DogDetails dogs={dogs} />} />
						<Route path="/payment" element={<PaymentPage />} />
						<Route path="/inscription" element={<Inscription />} />
						<Route path="/connexion" element={<Connexion />} />
						<Route path="/deconnexion" element={<Logout />} />
						<Route path="/cmptiban" element={<Cmptiban />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
