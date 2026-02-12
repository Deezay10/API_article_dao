const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");
const { v4: uuidv4 } = require('uuid');
const article = require("../sequelize/article-model");

class DaoArticleMongoose extends IDAOArticle{
    async selectAll() {
        return await Article.find();
    };
    async selectByUid(uid) {
        return await Article.findOne({ uid: uid });
    };
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
    async deleteArticle(articleUid) {
        return await Article.findOneAndDelete({ uid: articleUid });
    }

}

module.exports = DaoArticleMongoose;