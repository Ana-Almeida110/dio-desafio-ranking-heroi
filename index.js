let vitorias = 105;
let derrotas = 10;

function calcularRanking(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = classificarHeroi(vitorias);
    console.log(
        `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`
    );
}

function classificarHeroi(vitorias){
    let nivel = "";
    if (vitorias <= 10 ) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }    

    return nivel
}

calcularRanking(vitorias, derrotas);
