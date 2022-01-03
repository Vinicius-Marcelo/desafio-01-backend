function cacula(idades = []) {
    let maioresDeIdade = [];
    for (let idade of idades) {
        if (idade >= 18) {
            maioresDeIdade.push(idade);
        }
    } if (maioresDeIdade.length > 0) {
        let caculaDosAdultos = maioresDeIdade[0];
        for (let idade of maioresDeIdade) {
            if (idade < caculaDosAdultos) {
                caculaDosAdultos = idade;
            }
        } console.log(caculaDosAdultos);
    } else {
        console.log(`CRESCA E APARECA`);
    }
} cacula([19, 18, 17, 14, 15, 22])