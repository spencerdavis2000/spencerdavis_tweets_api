const hashService = require('../services/hashService');
const extractHashTags = require('../utility/extractHashTags');

// implementing a singleton design pattern
class TweetService {
  constructor() {
    if (TweetService.instance) {
      return TweetService.instance;
    }
    this.tweets = new Map();
    TweetService.instance = this;
  }
  addTweet(tweet) {
    if (this.hasTweet(tweet)) {
      return { success: false, message: "Duplicate tweet detected" };
    }
    this.tweets.set(tweet, true)
    const hashtags = extractHashTags(tweet);
    hashService.addHashTag(hashtags);
    return { success: true, tweet, hashtags, message: "Successfully added tweet and stored hashtags" };
  }
  hasTweet(tweet) {
    return this.tweets.has(tweet);
  }
  getAllTweets() {
    return Array.from(this.tweets.keys());
  }
}

module.exports = new TweetService(); // export singleton instance