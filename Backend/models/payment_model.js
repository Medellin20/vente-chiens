const mongoose = require('mongoose');

// Définir le schéma pour les paiements
const paymentSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
    // Vous pouvez ajouter des validations supplémentaires en fonction de vos besoins
  },
  cvv: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  cardholderName: {
    type: String,
    required: true,
  },
  // Vous pouvez ajouter plus de champs ici si nécessaire
});

// Créer le modèle PaymentModel en utilisant le schéma de paiement
const PaymentModel = mongoose.model('Payment', paymentSchema);

// Exporter le modèle PaymentModel
module.exports = PaymentModel;
