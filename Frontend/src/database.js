mongoose = require('mongoose');

// connection base de donnees
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database!')
}).catch(err => {
    console.log("Cannot connect to the database!",err)
});

exports.db_conn = mongoose