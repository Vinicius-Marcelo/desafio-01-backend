function solucao(numero, limiteInferior, limiteSuperios) {
    if (numero >= limiteInferior && numero <= limiteSuperios) {
        console.log(`PERTENCE`);
    } else {
        console.log(`NÃO PERTENCE`);
    }
}; solucao(10, 5, 20);