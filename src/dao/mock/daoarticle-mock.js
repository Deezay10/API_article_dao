const IDAOArticle = require("../idaoarticle");

let Articles = [{
    uid: "1",
    title: "Valorant"
},
    {
        uid: "2",
        title: "Inazuma Eleven Victory Road"
    }];

class DaoArticleMock extends IDAOArticle {

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return Articles;
    }
}

module.exports = DaoArticleMock;