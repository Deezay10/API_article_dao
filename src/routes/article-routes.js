const express = require('express')
const router = express.Router()
const Article = require('../dao/sequelize/article-model');
const ArticleServices = require('../services/article-services');


// Route pour afficher tous les articles
router.get("/articles", async (request, response) => {
    // Select all
    const serviceResponse = await ArticleServices.getAll();

    return response.json(serviceResponse);
});

// Route pour créer un article ou modifier un article existant
router.post("/article-update", async (request, response) => {
    const { uid, title, desc, author } = request.body; // ← récupère les données du POST Angular

    const serviceResponse = await ArticleServices.updateArticle(uid, title, desc, author);

    return response.json(serviceResponse);
});

// Route pour supprimer un article
router.delete("/article/:uid", async (request, response) => {

    const serviceResponse = await ArticleServices.deleteArticle(request.params.uid);

    return response.json(serviceResponse);
});

// Route pour récupérer un seul article
router.get("/article/:uid", async (request, response) => {
    const serviceResponse = await ArticleServices.selectByUid(request.params.uid);
    return response.json(serviceResponse);
})
module.exports = router