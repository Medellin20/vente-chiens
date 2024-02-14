const mongoose = require('mongoose');

// connection base de donnees
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database!');
    } catch (err) {
        console.error("Cannot connect to the database!", err);
    }
};

module.exports = connectDB;