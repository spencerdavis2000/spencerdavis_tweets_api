const hashService = require('../services/hashService');

const getTrendingHashTags = (req, res) => {
  const allHashTags = hashService.getAllHashTags();

  const hashArray = Object.keys(allHashTags).map(key => ({
    hashtag: allHashTags[key]['hashtag'],
    count: allHashTags[key]['count']
  }));

  hashArray.sort((a, b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    return a.hashtag.localeCompare(b.hashtag);
  });

  const sortedHashTags = hashArray.map(item => item.hashtag);
  res.status(200).json(sortedHashTags);
}

module.exports = {
  getTrendingHashTags,
}