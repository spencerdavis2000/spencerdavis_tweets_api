function extractHashtags(str) {
  const regex = /#\w+/g; // Match '#' followed by one or more word characters
  const hashtags = str.match(regex);
  return hashtags ? hashtags : []; 
}

module.exports = extractHashtags;