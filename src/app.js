require('dotenv').config()

const express = require('express');

// Initialiser l'application back
const app = express();

app.use(express.json());
// Importer et Injecter route externe
const game_routes = require('./routes/game-routes');

app.use(game_routes);

// MODE : SEQUELIZE
if (process.env.BDD_MODE  === "sequelize") {

    require("./dao/sequelize/connexion").connect_sequelize();
}

//MODE : Mongoose
else if (process.env.BDD_MODE === "mongodb") {

    require("./dao/mongoose/connexion").connect_mongoose();
}

// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});