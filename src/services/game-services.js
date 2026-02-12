// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");
const {logger} = require("../logger");
const {makeService} = require("./service-helper");
const {v4 : uuidv4}= require('uuid');

module.exports = {

    getAll : async () => {
        // Select all
        const toutMesGames = await DAOFactory.getDAOGame().selectAll();

        return makeService( "200", "Tout les jeux ont été récupérés",toutMesGames);
    },

    updateGame: async (uid, title) => {
        const updatedGame = await DAOFactory.getDAOGame().updateGame({uid, title});

        return makeService("200", "Jeu sauvegardé avec succès", updatedGame);
    }
}