const Game = require("./game-model");
const IDAOGame = require("../idaogame");

class DaoGameSequelize extends IDAOGame{
    async insert(game) {
        return await Game.create(game)};
    async selectAll() {
        return await Game.findAll();
    };
}

module.exports = DaoGameSequelize;