const express = require('express')
const router = express.Router()
const Game = require('../dao/sequelize/game-model');
const GameService = require('../services/game-services');

router.get("/games", async (request, response) => {
    // Select all
    const serviceResponse = await GameService.getAll();

    return response.json(serviceResponse);
});

router.post("/game-update", async (request, response) => {
    const { uid, title } = request.body; // ← récupère les données du POST Angular

    const serviceResponse = await GameService.updateGame(uid, title);

    return response.json(serviceResponse);
})
module.exports = router