const Game = require("./game-model");
const IDAOGame = require("../idaogame");

class DaoGameMongoose extends IDAOGame{
    async insert(game) {
        const newGame = new Game(game)
        return await newGame.save();
    };
    async selectAll() {
        return await Game.find();
    };
}

module.exports = DaoGameMongoose;