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

function parImpar(a, b) {
  if (a % 2 == 0 && b % 2 != 0) {
    return `somente o numero ${a} é par e ${b} é impar`
  }
  else if(b % 2 == 0 && a % 2 != 0) {
    return `somente o numero${b} é par e ${a} é impar`
  } else if (a % 2 == 0 && b % 2 == 0) {
    return 'ambos são par'
  }
  else {
    return 'ambos são impar'
  }
}

function verificarVoto(idade) {
  if (idade < 16) {
    return "Não pode votar";
  } else if (idade < 18) {
    return "Voto opcional";
  } else if (idade < 70) {
    return "Voto obrigatório";
  } else {
    return "Voto opcional";
  }
}

function bonus(salario) {
  if(salario<2000) {
    return salario * 0.20;
  }
  else if (salario <= 5000) {
    return salario * 0.10;
  }
  else {
    return salario * 0.05;
  }
}

function podeDirigir(idade) {
  if(idade > 18) {
    return "pode dirigir"
  }
  else {
    return 'não pode dirigir'
  }
}

function semestre(mes) {
  switch (mes.toLowerCase()) {
    case "janeiro":
    case "fevereiro":
    case "março":
    case "abril":
    case "maio":
    case "junho":
      return "primeiro semestre";

    case "julho":
    case "agosto":
    case "setembro":
    case "outubro":
    case "novembro":
    case "dezembro":
      return "segundo semestre";

    default:
      return "mes invalido";
  }
}

function vogalConsoante(l) {
  l = l.toLowerCase();

  if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
    return "vogal";
  } else {
    return "consoante";
  }
}



module.exports = { somar, mensagemBoasVindas, maior, parImpar, verificarVoto, bonus, podeDirigir, semestre, vogalConsoante};
// export default { somar, mensagemBoasVindas };