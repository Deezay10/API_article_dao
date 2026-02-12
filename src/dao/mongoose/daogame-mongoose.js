const Game = require("./game-model");
const IDAOGame = require("../idaogame");
const { v4: uuidv4 } = require('uuid');

class DaoGameMongoose extends IDAOGame{
    async selectAll() {
        return await Game.find();
    };
    async selectByUid(uid) {
        return await Game.findOne({ uid: uid });
    };
    async updateGame(game) {
        if (!game.uid){
            game.uid = uuidv4();
        }
        return await Game.findOneAndUpdate(
            {uid: game.uid},
            {uid: game.uid, title: game.title},
            {new: true, upsert: true}

        );
    };

}

module.exports = DaoGameMongoose;