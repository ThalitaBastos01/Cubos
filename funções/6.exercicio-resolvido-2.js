// 21 anos ou menos -> jovem
// 22 a 65 anos -> adulto(a)
// 66 ou mais anos -> idosa


function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade < 66 ) {
        return "adulto(a)"
    } else {
        return "idoso(a)"
    }
}

const valorRetornadoPelaFuncao = determinarFaixaEtaria(88);

console.log(determinarFaixaEtaria(88));