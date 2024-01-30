const express = require('express');
const auth = require('../middleware/user.middleware');
const userController = require('../controllers/user_controller');
const body = require('express-validator');
const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/register', userController.registerUser);

// Route pour la connexion d'un utilisateur
router.post('/login', userController.login);

// Route pour obtenir les informations d'un utilisateur (nécessite une authentification)
// router.get('/info', auth, userController.getUserInfo);

// Exporter le routeur
module.exports = router;
