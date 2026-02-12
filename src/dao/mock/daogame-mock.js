const IDAOGame = require("../idaogame");

let GAMES = [{
    uid: "1",
    title: "Jeu 1"
},
    {
        uid: "2",
        title: "Jeu 2"
    }];

class DAOGameMock extends IDAOGame {


    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(game) {
        GAMES.push(game);
        return game;
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return GAMES;
    }
}

module.exports = DAOGameMock;