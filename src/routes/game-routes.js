const express = require('express')
const router = express.Router()
const Game = require('../dao/sequelize/game-model');
const GameService = require('../services/game-services');

router.get("/creategame", async (request, response) => {

    const serviceResponse = await GameService.createGame();

    return response.json(serviceResponse);
});

router.get("/games", async (request, response) => {
    // Select all
    const serviceResponse = await GameService.getAll();

    return response.json(serviceResponse);
});

module.exports = router