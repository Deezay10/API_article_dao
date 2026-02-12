const GameServices = require('./game-services');

test('Tester récupérer tout les jeux', async() => {

    const testResult = await GameServices.getAll();

    expect(testResult.code).toBe("200")
})

test('Tester créer un jeu', async() => {

    const testResult = await GameServices.createGame();

    expect(testResult.code).toBe("200")
})