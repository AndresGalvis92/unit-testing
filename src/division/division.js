//Funcion para multiplicar dos numeros

function dividir(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "datos invalidos";
    }
    return num1 / num2;
}
module.exports =dividir;