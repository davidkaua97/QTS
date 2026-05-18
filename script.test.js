const { somar, mensagemBoasVindas, maior } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior', () => {
  expect(maior(5, 3)).toBe(5);
});

