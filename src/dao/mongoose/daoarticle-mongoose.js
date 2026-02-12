const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");
const { v4: uuidv4 } = require('uuid');

class DaoArticleMongoose extends IDAOArticle{

    // Affiche tous les articles
    async selectAll() {
        return await Article.find();
    };

    // Affiche un seul article en fonction de son uid
    async selectByUid(uid) {
        return await Article.findOne({ uid: uid });
    };

    // Créer un article ou modifie un article existant
    async updateArticle(article) {
        if (!article.uid){
            article.uid = uuidv4();
        }
        return await Article.findOneAndUpdate(
            {uid: article.uid},
            {uid: article.uid, title: article.title, desc: article.desc, author: article.author},
            {new: true, upsert: true}

        );
    };
    // Supprime un article
    async deleteArticle(articleUid) {
        return await Article.findOneAndDelete({ uid: articleUid });
    }

}

module.exports = DaoArticleMongoose;