// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");
const {logger} = require("../logger");
const {makeService} = require("./service-helper");
const {v4 : uuidv4}= require('uuid');

module.exports = {

    // Un fonction du metier
    createGame : async () => {

        const generatedId = uuidv4();
        let game = {uid: generatedId, title :"Un jeu"};
        const monNewGame = await DAOFactory.getDAOGame().insert(game);

        return makeService("200", "Jeu crée avec succès",monNewGame);
    },

    getAll : async () => {
        // Select all
        const toutMesGames = await DAOFactory.getDAOGame().selectAll();

        return makeService( "200", "Tout les jeux ont été récupérés",toutMesGames);
    }
}