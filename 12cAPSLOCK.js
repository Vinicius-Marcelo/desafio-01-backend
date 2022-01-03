function processData(input) {
    let primeiraLetra = input[0];
    let restoDasLetras = input.substr(1);
    if (primeiraLetra === primeiraLetra.toLowerCase() && restoDasLetras === restoDasLetras.toUpperCase()) {
        console.log(primeiraLetra.toUpperCase() + restoDasLetras.toLowerCase());
    } else if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else {
        console.log(input);
    }
} processData("ajfasdjfioajs");