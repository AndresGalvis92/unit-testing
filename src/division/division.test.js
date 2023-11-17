//importo la funcion dividir
const dividir = require("./division");

// test 1  División de dos números positivos
test("Dividir 10 entre 2 debería dar 5", () => {
    // Sujeto de prueba
    const result = dividir(10, 2);
    // Test
    expect(result).toBe(5);
});

// test 2 División de un número positivo por cero
test("Dividir 8 entre 0 debería dar Infinity", () => {
    // Sujeto de prueba
    const result = dividir(8, 0);
    // Test
    expect(result).toBe(Infinity);
});

// test 3 División de dos números negativos
test("Dividir -24 entre -4 debería dar 6", () => {
    // Sujeto de prueba
    const result = dividir(-24, -4);
    // Test
    expect(result).toBe(6);
});