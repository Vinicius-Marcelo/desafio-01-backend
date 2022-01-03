/* const cofre = [
    2, 3, 4
];
let totalAcumulado = 0;
for (let valor of cofre) {
    totalAcumulado += valor;
};
let mediaAcumulada = totalAcumulado / cofre.length;
console.log(mediaAcumulada); */
function cofre() {
    const cofre = [2, 3, 4];
    let totalAcumulado = 0;
    for (let valor of cofre) {
        totalAcumulado += valor;
    }; console.log(totalAcumulado / cofre.length);
}; cofre()