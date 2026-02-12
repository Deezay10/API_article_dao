const express = require('express')
const router = express.Router()
const Article = require('../dao/sequelize/article-model');
const ArticleServices = require('../services/article-services');

router.get("/articles", async (request, response) => {
    // Select all
    const serviceResponse = await ArticleServices.getAll();

    return response.json(serviceResponse);
});

router.post("/article-update", async (request, response) => {
    const { uid, title, desc, author } = request.body; // ← récupère les données du POST Angular

    const serviceResponse = await ArticleServices.updateArticle(uid, title, desc, author);

    return response.json(serviceResponse);
});

router.delete("/article/:uid", async (request, response) => {

    const serviceResponse = await ArticleServices.deleteArticle(request.params.uid);

    return response.json(serviceResponse);
})
module.exports = router