//llamo la funcion a testear
const resta = require("./resta");
//test numero 1
test("100 - 50 should be 50", () => {
    // sujeto de prueba
    const result = resta(100, 50);
    // test
    expect(result).toBe(50);
});

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = resta("10", "20");
    expect(result).toBe(err);
});

//test numero 2
test("- 2 - (-5) should be 3", () => {
    // sujeto de prueba
    const result = resta(-2, -5);
    // test
    expect(result).toBe(3);
});
// test numero 3
test("si uno de los operandos es cero, el resultado debería ser el otro operando", () => {
    // sujeto de prueba
    const result1 = resta(0, 10);
    const result2 = resta(20, 0);
    // test
    expect(result1).toBe(-10);
    expect(result2).toBe(20);
});
