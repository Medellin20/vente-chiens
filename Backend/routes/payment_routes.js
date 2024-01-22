const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment_controller');
const auth = require('../middleware/user.middleware');

// Route to initiate a payment
router.post('/initiate', auth, paymentController.initiatePayment);

// Route to get all payments
router.get('/all', auth , paymentController.getAllPayments);

// Route to delete a payment by card number
router.delete('/delete/:cardNumber', auth , paymentController.deletePaymentByCardNumber);

module.exports = router;

