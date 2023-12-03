const express = require('express');
import { register, login } from '../api/controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;