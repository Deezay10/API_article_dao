const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");
const { v4: uuidv4 } = require('uuid');

class DaoArticleSequelize extends IDAOArticle{
    async selectAll() {
        return await Article.findAll();
    };
    async updateArticle(article) {
        if (!article.uid) {
            article.uid = uuidv4();
        }

        const [updatedArticle, created] = await Article.upsert({
            uid: article.uid,
            title: article.title,
            desc: article.desc,
            author: article.author
        });

        return updatedArticle;
    };
    async selectByUid(uid) {
        return await Article.findOne({ uid: uid });
    };
    async deleteArticle(articleUid) {
        return await Article.destroy({where: {uid: articleUid}});
    };
}

module.exports = DaoArticleSequelize;