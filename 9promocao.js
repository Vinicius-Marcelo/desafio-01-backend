function solucao(precos = []) {
    let soma = 0;
    let menor = precos[0];
    for (let preco of precos) {
        soma += preco;
        if (preco < menor) {
            menor = preco;
        }
    }
    if (precos.length >= 3) {
        // tem promo
        console.log(soma - menor / 2);
    } else {
        //nao tem promo
        console.log(soma);
    }
} solucao([100, 200, 50]);