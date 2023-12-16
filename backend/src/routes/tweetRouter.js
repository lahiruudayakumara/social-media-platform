const express = require('express');
const { verifyToken } = require('../api/middleware/auth');
const { getFeedTweets, getUserTweets, reactTweet, createTweet } = require('../api/controllers/tweetController');

const router = express.Router();

router.post('/create', createTweet);
/* Read */
router.get('/tweet', verifyToken, getFeedTweets);
router.get('/tweet/:id', getUserTweets);


/* Update */
router.patch('/:id/like', reactTweet);


module.exports = router;

