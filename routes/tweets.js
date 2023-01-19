const router = require("express").Router();
const Tweet = require("../database/models/tweet.model");
const {tweetList, tweetNew, tweetCreate} = require('../controllers/tweets.controller');


router.get("/tweet/new", tweetList);

router.get("/", tweetNew);

router.post("/", tweetCreate);

module.exports = router;
