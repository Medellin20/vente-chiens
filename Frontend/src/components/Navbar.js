// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
	const token = localStorage.getItem("token");
	const isConnected = !!token;
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<nav
			className=" bg-black text-white p-2 w-full fixed mb-20 z-10"
			id="navbar"
		>
			<div className="flex flex-row px-2 justify-between lg:w-8/12 md:w-10/12 mx-auto w-full">
				<Link
					className="flex flex-col items-center justify-start space-y-2"
					to="/"
				>
					<img className="h-20" src={`/images/image.png`} alt="LOGO" />
					<span>HOMEDOG</span>
				</Link>
				<ul className="md:flex flex-row items-center justify-end space-x-4 hidden">
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/dogs">Chiens à vendre</Link>
					</li>
					{!isConnected && (
						<>
							<li>
								<Link to="/inscription">Inscription</Link>
							</li>
							<li>
								<Link to="/connexion">Connexion</Link>
							</li>
						</>
					)}
					{isConnected && (
						<li>
							<Link to="/deconnexion">Deconnexion</Link>
						</li>
					)}
				</ul>
				<div className="flex items-center cursor-pointer md:hidden">
					<svg
						onClick={() => {
							setShowMobileMenu(true);
						}}
						height={"30px"}
						width={"30px"}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<path
								d="M4 12H20M4 8H20M4 16H12"
								stroke="#ffffff"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</g>
					</svg>
				</div>
			</div>
			{showMobileMenu && (
				<div className="top-0 left-0 fixed w-full bg-gray-500 h-full flex flex-col p-4 text-white space-y-4">
					<div className="flex flex-row justify-end">
						<div className="flex border rounded-full shadow-sm">
							<svg
								onClick={() => {
									setShowMobileMenu(false);
								}}
								height={"30px"}
								width={"30px"}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path
										d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
										fill="#ffffff"
									></path>
								</g>
							</svg>
						</div>
					</div>
					<ul className="flex-row items-center justify-end space-y-4">
						<li>
							<Link onClick={() => {setShowMobileMenu(false)}} to="/">Accueil</Link>
						</li>
						<li>
							<Link onClick={() => {setShowMobileMenu(false)}} to="/dogs">Chiens à vendre</Link>
						</li>
						{!isConnected && (
							<>
								<li>
									<Link onClick={() => {setShowMobileMenu(false)}} to="/inscription">Inscription</Link>
								</li>
								<li>
									<Link onClick={() => {setShowMobileMenu(false)}} to="/connexion">Connexion</Link>
								</li>
							</>
						)}
						{isConnected && (
							<li>
								<Link onClick={() => {setShowMobileMenu(false)}} to="/deconnexion">Deconnexion</Link>
							</li>
						)}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
