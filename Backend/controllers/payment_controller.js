// Import necessary modules
const PaymentModel = require('../models/payment_model');

// Define the payment controller functions

// Controller function to initiate a payment
exports.initiatePayment = async (req, res) => {
    // Extract payment information from the request body
    const { surname, lastname, email, deliveryemail, personnalemail } = req.body;

    try {
    // Vérifier si le payement existe déjà
    let payment = await PaymentModel.findOne({ email });
    if (payment) {
      return res
        .status(400)
        .json({ msg: "Payment already exists with this cardNumber" });
    }

    // Créer une nouvelle payment-monnaie
    payment = new PaymentModel({
      surname,
      lastname,
      email,
      deliveryemail,
      personnalemail,
    });

    // Sauvegarder le payement dans la base de données
    await payment.save();

    res.json({ msg: "Payment added successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Controller function to get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payment = await PaymentModel.find();
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a payment by card number
exports.deletePaymentByEmail = async (req, res) => {
  try {
    const email = await User.findByIdAndDelete(req.params.email);
    if (!email) {
      return res.status(404).json({ message: 'Email not found' });
    }
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
