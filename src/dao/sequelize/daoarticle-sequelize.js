const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");
const { v4: uuidv4 } = require('uuid');

class DaoArticleSequelize extends IDAOArticle{

    // Affiche tous les articles
    async selectAll() {
        return await Article.findAll();
    };

    // Créer un article ou modifie un article existant
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

    // Affiche un seul article en fonction de son uid
    async selectByUid(uid) {
        return await Article.findOne({ uid: uid });
    };

    // Supprime un article
    async deleteArticle(articleUid) {
        return await Article.destroy({where: {uid: articleUid}});
    };
}

module.exports = DaoArticleSequelize;