function apresentar(pessoa) {

    if (pessoa.idade < 21) {
        console.log(`sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`sou  ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`sou  ${pessoa.nome}, sou um(a) idoso(a) ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}


const pessoa1 = {
    nome: "josé",
    idade: 30,
    profissao: "professor"
}

apresentar(pessoa1)

const pessoa2 = {
    nome: "pedro",
    idade: 65,
    profissao: "médico"
}

apresentar(pessoa2)

const pessoa3 = {
    nome: "ana",
    idade: 19,
    profissao: "estudante"
}

apresentar(pessoa3)