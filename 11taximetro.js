function solucao(min, km) {
    let custoTempo = 0, custoKm = 0;
    if (min <= 20) {
        custoTempo = min * 50
    } else {
        custoTempo = ((min - 20) * 30) + 1000;
    }
    if (km <= 10) {
        custoKm = km * 70
    } else {
        custoKm = ((km - 10) * 50) + 700;
    }
    console.log(custoKm + custoTempo);
} solucao(25, 11.5);