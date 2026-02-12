const IDAOGame = require("../idaogame");

let GAMES = [{
    uid: "1",
    title: "Valorant"
},
    {
        uid: "2",
        title: "Inazuma Eleven Victory Road"
    }];

class DAOGameMock extends IDAOGame {

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return GAMES;
    }
}

module.exports = DAOGameMock;