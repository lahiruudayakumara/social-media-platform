const express = require('express');
const cors = require('cors');

import 'dotenv/config';
import DBConnection from './config/dbConfig.js';

const app = express();
app.use(express.json());

const userRoute = require('./routes/userRoute.js');



const PORT = process.env.PORT || 8000;

DBConnection();

//Routes
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`🚀 Server runing Port is ${PORT} `)
});

