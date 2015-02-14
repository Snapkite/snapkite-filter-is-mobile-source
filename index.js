function isiPhone(tweet) {
  return /iPhone/i.test(tweet.source);
};

function isAndroid(tweet) {
  return /Android/i.test(tweet.source);
};

function isValid(tweet) {
  // This filter doesn't block anything
  if (CONFIG.content.with && CONFIG.content.without) {
    return true;
  }

  // This filter blocks all tweets
  if (!CONFIG.content.with && !CONFIG.content.without) {
    return false;
  }

  // Show only tweets with this content
  if (CONFIG.content.with && !CONFIG.content.without) {
    if (isiPhone(tweet) || isAndroid(tweet)) {
      return true;
    }

    return false;
  }

  // Show only tweets without this content
  if (!CONFIG.content.with && CONFIG.content.without) {
    if (isiPhone(tweet) || isAndroid(tweet)) {
      return false;
    }

    return true;
  }
}

module.exports = {
  isValid: isValid
};
