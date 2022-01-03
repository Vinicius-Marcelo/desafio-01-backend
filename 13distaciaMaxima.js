function processData(input){
    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0], 10);
    const coordenadas = [];
    let maiorDistacia = -Infinity;
    for(let i = 1; i < linhas.length; i++){
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x:parseInt(coord[0], 10),
            y: parseInt(coord[1], 10)
        })
    }
    for(let i = 0; i < linhas.length; i++){
        for(let j = 1; j < linhas.length; i++){
            const x1 = coordenadas[i].x 
            const x2 = coordenadas[j].x
            const y1 = coordenadas[i].y
            const y2 = coordenadas[j].y

            const distacia = Math.sqrt(((x1-x2)**2)) + (((y1-y2)**2));
            if(distacia > maiorDistacia){
                maiorDistacia = distacia;
            }
        }
    }console.log(maiorDistacia);
}