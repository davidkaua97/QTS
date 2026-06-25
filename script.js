function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}


function maiorValor(a, b) {
  if (a > b) return `${a} é o maior`;
  if (b > a) return `${b} é o maior`;
  return `Os valores são iguais`;
}

function parOuImpar(a, b) {
  const resultA = a % 2 === 0 ? `${a} é par` : `${a} é ímpar`;
  const resultB = b % 2 === 0 ? `${b} é par` : `${b} é ímpar`;
  return `${resultA}, ${resultB}`;
}

function podeVotar(idade) {
  if (idade < 16) return `Não pode votar`;
  if (idade === 16 || idade === 17 || idade >= 70) return `Voto opcional`;
  return `Voto obrigatório`;
}


function positivoNegativo(valor) {
  if (valor > 0) return `Positivo`;
  if (valor < 0) return `Negativo`;
  return `Igual a zero`;
}

function calcularBonus(salario) {
  if (salario < 2000) return salario * 0.20;
  if (salario <= 5000) return salario * 0.10;
  return salario * 0.05;
}

function podeDirigir(idade) {
  if (idade >= 18) return `Pode dirigir`;
  return `Não pode dirigir`;
}

function semestre(mes) {
  const primeiro = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'];
  if (primeiro.includes(mes.toLowerCase())) return `Primeiro semestre`;
  return `Segundo semestre`;
}

function vogalOuConsoante(letra) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  if (vogais.includes(letra.toLowerCase())) return `Vogal`;
  return `Consoante`;
}

function media(array) {
  const soma = array.reduce((acc, val) => acc + val, 0);
  return soma / array.length;
}

function login(usuario, senha) {
  if (usuario === 'Admin' && senha === '123') return `Conectado com sucesso!`;
  return `Acesso negado! Usuário ou senha incorretos!`;
}

module.exports = { somar, mensagemBoasVindas, maiorValor, parOuImpar, podeVotar, positivoNegativo, calcularBonus, podeDirigir, semestre, vogalOuConsoante, media, login };