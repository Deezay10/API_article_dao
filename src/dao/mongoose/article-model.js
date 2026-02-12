const mongoose = require('mongoose');

// Création du modèle de l'article
const Article = mongoose.model("Game", {uid: String, title: String, desc : String, author : String}, "articles");

module.exports = Article;