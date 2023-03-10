const {getTweets, createTweet} = require('../queries/tweets.queries');

exports.tweetList = async(req, res, next) => {
    try{
        const tweets = getTweets();
        res.render("tweets/tweet-list", { tweets });
    }catch(e){
        next(e)
    }
}

exports.tweetNew = (req, res, next) => {
    res.render("tweets/tweet-form");
}

exports.tweetCreate = async (req, res, next) => {
    try{
        const body = req.body;
        await createTweet(body);
        res.redirect('/tweets');
    }catch(e){
        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
        res.status(400).render("tweets/tweet-form", { errors });
    }
}