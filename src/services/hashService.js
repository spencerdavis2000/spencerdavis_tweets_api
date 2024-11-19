class HashService {
  constructor() {
    if (HashService.instance) {
      return HashService.instance;
    }
    this.hashtags = new Map();
    HashService.instance = this;
  }
  addHashTag(hashtags) {
    if (Array.isArray(hashtags)) {
      hashtags.forEach((hashtag) => {
        const count = this.hashtags.get(hashtag) || 0;
        this.hashtags.set(hashtag, count + 1);
      });
    }
  }
  getHashtagCount(hashtag) {
    return this.hashtags.get(hashtag) || 0;
  }
  getAllHashTags() {
    return Array.from(this.hashtags.entries()).map(([hashtag, count]) => ({
      hashtag,
      count,
    }));
  }
}
module.exports = new HashService();