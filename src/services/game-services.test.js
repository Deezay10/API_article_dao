const GameServices = require('./game-services');

test('Tester récupérer tout les jeux', async() => {

    const testResult = await GameServices.getAll();

    expect(testResult.code).toBe("200")
})