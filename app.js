function getMessage() {
    return "Hola, Mundo";
}

function main() {
    console.log(getMessage());
}

main();

// Exportar la función para que pueda ser usada en las pruebas
module.exports = getMessage;
