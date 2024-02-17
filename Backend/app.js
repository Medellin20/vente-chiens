const express = require('express');
bodyParser = require('body-parser'),
cors = require('cors');
router = express.Router()

// serveur
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var corsOptions = {
    origin: '*'
  }
  app.use(cors(corsOptions));

// erreur cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



  app.get('/', (req, res) => {
    res.json({'status': true})
  })

require('./routes/index.js')(app);
  

// definition des routes de user
//const UserRoute = require('./routes/user_routes')
//router.use('/api/auth',UserRoute)

// payment route
//const PaymentRoute = require('./routes/payment_routes')
//router.use('/api/payment', PaymentRoute
//)

// get status 
const PaymentRoute = require('./routes/payment_routes')
router.use('/', PaymentRoute)

app.use(router);

module.exports = app;