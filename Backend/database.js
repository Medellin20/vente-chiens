import { set, connect } from 'mongoose';

// connection base de donnees
set('strictQuery', true);

const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database!');
    } catch (err) {
        console.error("Cannot connect to the database!", err);
    }
};

export default connectDB;
