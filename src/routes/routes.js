const express = require('express');
const tweet = require('../controllers/tweet');
const trendingHashtags = require('../controllers/trendingHashTags');
const tweetData = require('../controllers/tweetData');

const router = express.Router();

router.post('/tweet', tweet.createTweet)
router.get('/getAllTweets', tweetData.getAllTweets);
router.get('/getAllHashTags', tweetData.getAllHashTags);
router.get('/trending-hashtags', trendingHashtags.getTrendingHashTags);

module.exports = router;