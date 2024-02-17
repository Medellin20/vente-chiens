const express = require('express');
const router = express.Router();

const authRoutes = require('./user_routes')
const payementRoutes = require('./payment_routes')

module.exports = (app) => {
    
    router.use('/api/auth', authRoutes)
    router.use('/api/payement', payementRoutes)

    app.use(router)

}
