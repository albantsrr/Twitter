const Tweet = require('../database/models/tweet.model');

exports.getTweets = () => {
    Tweet.find({}).exec()
} 

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();

}