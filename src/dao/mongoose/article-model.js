const mongoose = require('mongoose');

const Article = mongoose.model("Game", {uid: String, title: String, desc : String, author : String}, "articles");

module.exports = Article;