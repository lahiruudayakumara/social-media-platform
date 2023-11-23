const express = require('express');
import 'dotenv/config';
import DBConnection from './config/dbConfig.js';

const app = express();

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => {
    console.log(`🚀 Server runing Port is ${PORT} `)
});

