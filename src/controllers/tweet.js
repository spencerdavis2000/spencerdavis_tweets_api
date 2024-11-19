const tweetService = require('../services/tweetService');

const createTweet = (req, res) => {
  const { tweet } = req.body;
  if (!tweet) {
    return res.status(400).json({ success: false, message: "Tweet is required" });
  }
  if (!tweetService.hasTweet(tweet)) {
    const result = tweetService.addTweet(tweet);
    return res.status(201).json(result);
  } else {
    return res.status(400).json({ success: false, message: "Duplicate tweet detected" });
  }
}


module.exports = {
  createTweet,
}