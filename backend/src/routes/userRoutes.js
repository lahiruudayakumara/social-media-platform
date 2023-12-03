const express = require('express');
import { getUser, getUserFriends, addRemoveFriend } from '../api/controllers/userController'
import { verifyToken } from '../api/middleware/auth'

const router = express.Router();

/* READ */
router.get('/:id', getUser);
router.get('/:id/friends', getUserFriends);

/* UPDATE */
router.patch('/:id/friends', addRemoveFriend);

module.exports = router;




