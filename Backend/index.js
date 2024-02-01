const express = require('express');
require('dotenv').config();
const connectDB = require('./database');
const app = require('./app'); // Assurez-vous que le chemin est correct

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
