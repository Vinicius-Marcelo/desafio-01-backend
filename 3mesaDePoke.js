function solucao(min, max, valores = []) {
    let listaAutorizada = [];
    for (let item of valores) {
        if (item >= min && item <= max) {
            listaAutorizada.push(item);
        }
    } console.log(listaAutorizada);
}; solucao(2, 10, [0, 5, 6, 11]);