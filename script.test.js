const { somar, mensagemBoasVindas,  maiorValor, parOuImpar, podeVotar, positivoNegativo, calcularBonus, podeDirigir, semestre, vogalOuConsoante, media, login } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior valor: a maior', () => {
  expect(maiorValor(10, 5)).toBe('10 é o maior');
});
test('maior valor: iguais', () => {
  expect(maiorValor(5, 5)).toBe('Os valores são iguais');
});

test('par ou impar', () => {
  expect(parOuImpar(4, 3)).toBe('4 é par, 3 é ímpar');
});

test('não pode votar', () => {
  expect(podeVotar(15)).toBe('Não pode votar');
});
test('voto opcional menor', () => {
  expect(podeVotar(16)).toBe('Voto opcional');
});
test('voto obrigatorio', () => {
  expect(podeVotar(25)).toBe('Voto obrigatório');
});
test('voto opcional idoso', () => {
  expect(podeVotar(70)).toBe('Voto opcional');
});

test('positivo', () => {
  expect(positivoNegativo(5)).toBe('Positivo');
});
test('negativo', () => {
  expect(positivoNegativo(-3)).toBe('Negativo');
});
test('zero', () => {
  expect(positivoNegativo(0)).toBe('Igual a zero');
});

test('bonus 20%', () => {
  expect(calcularBonus(1000)).toBe(200);
});
test('bonus 10%', () => {
  expect(calcularBonus(3000)).toBe(300);
});
test('bonus 5%', () => {
  expect(calcularBonus(6000)).toBe(300);
});

test('pode dirigir', () => {
  expect(podeDirigir(18)).toBe('Pode dirigir');
});
test('não pode dirigir', () => {
  expect(podeDirigir(17)).toBe('Não pode dirigir');
});

test('primeiro semestre', () => {
  expect(semestre('março')).toBe('Primeiro semestre');
});
test('segundo semestre', () => {
  expect(semestre('agosto')).toBe('Segundo semestre');
});

test('vogal', () => {
  expect(vogalOuConsoante('a')).toBe('Vogal');
});
test('consoante', () => {
  expect(vogalOuConsoante('b')).toBe('Consoante');
});

test('media', () => {
  expect(media([1, 2, 3, 4, 5])).toBe(3);
});

test('login correto', () => {
  expect(login('Admin', '123')).toBe('Conectado com sucesso!');
});
test('login incorreto', () => {
  expect(login('admin', '321')).toBe('Acesso negado! Usuário ou senha incorretos!');
});