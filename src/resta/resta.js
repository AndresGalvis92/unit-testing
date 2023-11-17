// unidad de prueba resta
// funcion para restar dos numeros
function resta(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "datos invalidos";
    }
    return num1 - num2;
}

module.exports = resta;

console.log(resta(200,25))