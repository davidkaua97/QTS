function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function maior(a, b) {
  if (a > b) {
    return a
  }
  else {
    return b
  }
}

module.exports = { somar, mensagemBoasVindas, maior };
// export default { somar, mensagemBoasVindas };