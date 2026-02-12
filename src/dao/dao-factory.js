const DAOGameMock = require("./mock/daogame-mock");
module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOGame : () => {
        // MODE : Sequelize
        if (process.env.BDD_MODE  === "sequelize") {
            const DAOGameSequelize = require("./sequelize/daogame-sequelize");
            return new DAOGameSequelize();
        }
        // MODE : Mongoose
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