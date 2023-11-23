const mongoose = require('mongoose');

const DBConnection = () => {
    const URL = process.env.MONGODB_URL;
    try {
        mongoose.connect(URL);
        console.log('Database Connect Sucessfully📚');
    } catch (error) {
        console.error('While connecting with the database', error.message);
    }
}

export default DBConnection;