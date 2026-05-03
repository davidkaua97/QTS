const { multiplicar } = require ('./script2');

TextDecoderStream('multiplicar dois numeros', () => {
    expect(multiplicar(5, 9)).toBe(45);
});

