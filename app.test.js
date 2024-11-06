const getMessage = require('./app');

test('debería retornar "Hola, Mundo"', () => {
    expect(getMessage()).toBe("Hola, Mundo");
});
