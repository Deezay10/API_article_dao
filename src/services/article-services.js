// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");
const {logger} = require("../logger");
const {makeService} = require("./service-helper");
const {v4 : uuidv4}= require('uuid');
const {getDAOArticle} = require("../dao/dao-factory");

module.exports = {

    // Service pour obtenir tous les articles
    getAll : async () => {
        // Select all
        const toutMesArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService( "200", "La liste des articles a été récupérée avec succès",toutMesArticles);
    },

    // Service pour créer un article ou modifier un article existant
    updateArticle: async (uid, title, desc, author) => {
        const updatedArticle = await DAOFactory.getDAOArticle().updateArticle({uid, title, desc, author});

        return makeService("200", "Article sauvegardé avec succès", updatedArticle);
    },

    // Service pour supprimer un article
    deleteArticle: async (uid) => {
        await DAOFactory.getDAOArticle().deleteArticle(uid);
        return makeService("200", "Article supprimé avec succès");
    },

    // Service pour afficher qu'un seul article
    selectByUid: async (uid) => {
        const article = await DAOFactory.getDAOArticle().selectByUid(uid)
        return makeService("200", "Article récupérée avec succès", article);
    }
}