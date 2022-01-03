const jogadores = [
    {
        nome: "Herman",
        jogada: 1
    },
    {
        nome: "Rhodes",
        jogada: 1
    },
    {
        nome: "Beach",
        jogada: 1
    }
]
/* let jogadorUm = jogadores[0];
console.log(jogadorUm.nome);
console.log(jogadores[1].jogada); */
let jogadaZero = [];
let jogadaUm = [];
for (let jogador of jogadores) {
    if (jogador.jogada === 1) {
        jogadaUm.push(jogador.nome);
    } else {
        jogadaZero.push(jogador.nome);
    }
}
if (jogadaUm.length === 1) {
    console.log(jogadaUm[0]);
} else if (jogadaZero.length === 1) {
    console.log(jogadaZero[0]);
} else {
    console.log(`NINGUEM`);
}