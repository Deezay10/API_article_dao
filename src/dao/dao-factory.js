const DAOGameMock = require("./mock/daogame-mock");
module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOGame : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // Pour l'instant on force en dur que on est en Sequelize
        // Si Sequelize ?
        if (process.env.BDD_MODE  === "sequelize") {
            const DAOGameSequelize = require("./sequelize/daogame-sequelize");
            return new DAOGameSequelize();
        }
        // Si MongoDB ?// const DAOGameMongoose = require("./mongoose/daogame-mongoose");
        // return new DAOGameMongoose();
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOGameMongoose = require("./mongoose/daogame-mongoose");
            return new DAOGameMongoose();
        }
        // MODE : Mock
        else if (process.env.BDD_MODE === "mock") {
            const DAOGameMock = require("./mock/daogame-mock");
            return new DAOGameMock();
        }
        // Fallback
        const DAOGameMock = require("./mock/daogame-mock");
        return new DAOGameMock();
    }
}