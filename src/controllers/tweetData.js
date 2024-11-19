const tweetService = require('../services/tweetService');
const hashService = require('../services/hashService');

// GET 
const getAllTweets = (req, res) => {
  const tweets = tweetService.getAllTweets();
  return res.status(200).json({ success: true, tweets });
}

// GET
const getAllHashTags = (req, res) => {
  const hashtags = hashService.getAllHashTags();
  return res.status(200).json({ success: true, hashtags });
}

module.exports = {
  getAllTweets,
  getAllHashTags,
}