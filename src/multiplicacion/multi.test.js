//llamo la funcion multi que sera validada
const multiplicar = require("./multi");

// test 1 multiplicar dos numeros positivos
test("Multiplicar 2 por 4 debería dar 8", () => {
    // Sujeto de prueba
    const result = multiplicar(2, 4);
    // Test
    expect(result).toBe(8);
});

// test 2 Multiplicación de un número positivo por cero
test("Multiplicar 5 por 0 debería dar 0", () => {
    // Sujeto de prueba
    const result = multiplicar(5, 0);
    // Test
    expect(result).toBe(0);
});

// Prueba 3: Multiplicación de un número negativo por un número positivo
test("Multiplicar -2 por 6 debería dar -12", () => {
    // Sujeto de prueba
    const result = multiplicar(-2, 6);
    // Test
    expect(result).toBe(-12);
});
