const ArticleServices = require('./article-services');

// test de la séléction de tous les articles
test('Tester récupérer tout les jeux', async() => {

    const testResult = await ArticleServices.getAll();

    expect(testResult.code).toBe("200")
})