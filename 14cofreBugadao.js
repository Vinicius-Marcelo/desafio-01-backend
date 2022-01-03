function processData(input) {
    const linhas = input.trim().split(" ");
    let senha = linhas[0];
    let palavra = linhas[1];
    let posicao = 0;
    let senhaCorreta = "";

    for (let letra of palavra) {
        if (letra === senha[posicao]) {
            senhaCorreta += letra;
            posicao++
        }
    }

    if (senhaCorreta === senha) {
        console.log(`SIM`);
    } else {
        console.log(`NAO`);
    }
} processData("cubos jfjasdfjaklsdj");
