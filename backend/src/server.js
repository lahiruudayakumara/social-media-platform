const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoute = require('./routes/authRoute.js');
const postRoute = require('./routes/postRouter.js');
const DBConnection =  require('./config/dbConfig.js');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

//Routes
app.use('/user', userRoute);
app.use('/post', postRoute);

DBConnection().then(() => {
    app.listen(PORT, () => {
        console.log('🚀 Database Connect Sucessfully in Server📚');
        console.log(`🚀🚀🚀 Server runing Port is ${PORT}🚀`);
    });
}).catch((error) => {
    console.error('While connecting with the database', error.message);
});

