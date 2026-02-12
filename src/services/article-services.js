// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");
const {logger} = require("../logger");
const {makeService} = require("./service-helper");
const {v4 : uuidv4}= require('uuid');

module.exports = {

    getAll : async () => {
        // Select all
        const toutMesArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService( "200", "La liste des articles a été récupérée avec succès",toutMesArticles);
    },

    updateArticle: async (uid, title, desc, author) => {
        const updatedArticle = await DAOFactory.getDAOArticle().updateArticle({uid, title, desc, author});

        return makeService("200", "Article sauvegardé avec succès", updatedArticle);
    },
    deleteArticle: async (uid) => {
        await DAOFactory.getDAOArticle().deleteArticle(uid);
        return makeService("200", "Article supprimé avec succès");
    }
}