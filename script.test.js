const { somar, mensagemBoasVindas, maior, parImpar, verificarVoto, bonus, podeDirigir, semestre, vogalConsoante} = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior', () => {
  expect(maior(5, 3)).toBe(5);
});

test('par ou impar', () => {
  expect(parImpar(2, 2)).toBe('ambos são par')
}); 

test('votar', () => {
  expect(verificarVoto(75)).toBe("Voto opcional")
})

test('bonus', () => {
  expect(bonus(3000)).toBe(3000 * 0.10)
})

test('dirigir', () => {
  expect(podeDirigir(16)).toBe('não pode dirigir')
})

test('semestre', () => {
  expect(semestre('março')).toBe('primeiro semestre')
})

test('vogal ou consoante', () => {
  expect(vogalConsoante('a')).toBe('vogal')
})