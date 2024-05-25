function calculaSaldoRankeadas(quantidadeVitorias, quantidadeDerrotas){
    let saldoRankeadas = quantidadeVitorias - quantidadeDerrotas;
    return saldoRankeadas;
}

function calculaRank(vitorias){
    let nivel = ''
    if(vitorias > 100){
        nivel = 'Imortal'
    }else if(vitorias > 90){
        nivel = 'Lendário'    
    }else if(vitorias > 80){
        nivel = 'Diamante'
    }else if(vitorias > 50){
        nivel = 'Ouro'
    }else if(vitorias > 20){
        nivel = 'Prata'
    }else if(vitorias > 10){
        nivel = 'Bronze'
    }else{
        nivel = 'Ferro'
    }

    return nivel
}

let saldoVitorias = calculaSaldoRankeadas(125, 42)
let nivel = calculaRank(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)