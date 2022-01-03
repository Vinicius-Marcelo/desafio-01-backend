function solucao(numeros = []) {
    let resultadoS = 0;
    let posicao = 0;
    const totalDeJogadores = numeros.length;
    for (let numero of numeros) {
        resultadoS += numero;
    }
    for (let i = 0; i < resultadoS; i++) {
        if (posicao === totalDeJogadores) {
            posicao = 1;
        } else {
            posicao++;
        }
    } console.log(posicao);
} solucao([1, 3, 2, 1])