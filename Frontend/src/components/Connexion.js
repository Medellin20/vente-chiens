// src/components/Connexion.js
import React, { useState } from "react";
import axios from "axios";
import "./Connexion.css";

const Connexion = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleConnexion = (e) => {
		// Ajoutez votre logique de connexion ici
		e.preventDefault();
		e.stopPropagation();

		// Ajoutez ici la logique pour traiter le paiement
		axios
			.post(
				"http://localhost:4000/api/auth/login",
				{
					username: username,
					password: password,
				},
				{
					headers: { "Access-Control-Allow-Origin": true },
				}
			)
			.then((res) => {
				console.log(res);
				window.localStorage.setItem("token", res.data.token);
				window.location = "/";
			})
			.catch((err) => {
				console.log(err);
				alert(
					"Erreur de connexion, veillez vérifiez si votre username ou mot de passe est valide"
				);
			});
	};

	return (
		<div className="flex items-center w-full md:w-8/12 lg:w-6/12 mx-auto justify-center px-2 xl:w-4/12">
			<div className="border w-full shadow-xl rounded-lg p-4 flex flex-col space-y-4">
				<h2>Connexion</h2>
				<form className="flex flex-col space-y-4 justify-start items-start">
					<div className="w-full">
						<label>Username : </label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Un seul mot, en minuscules"
							className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
						/>
					</div>
					<div className="w-full">
						<label>Password :</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Un seul mot, en minuscules"
							className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
						/>
					</div>
					<button
						className="bg-yellow-400 px-4 py-2 rounded-full"
						type="button"
						onClick={handleConnexion}
					>
						Se connecter
					</button>
				</form>
			</div>
		</div>
	);
};

export default Connexion;
