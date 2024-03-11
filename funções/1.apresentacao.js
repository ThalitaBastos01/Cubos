const pessoa = {
    nome: "josé",
    idade: 30,
    profissao: "professor"
}
if (pessoa.idade < 25) {
    console.log(`sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else if (pessoa.idade < 65) {
    console.log(`sou  ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else {
    console.log(`sou  ${pessoa.nome}, sou um(a) idoso(a) ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}


const pessoa2 = {
    nome: "pedro",
    idade: 65,
    profissao: "médico"
}

if (pessoa.idade < 25) {
    console.log(`sou  ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else if (pessoa.idade < 65) {
    console.log(`sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else {
    console.log(`sou  ${pessoa.nome}, sou um(a) idoso(a) ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}


const pessoa3 = {
    nome: "ana",
    idade: 19,
    profissao: "estudante"
}

if (pessoa.idade < 25) {
    console.log(`sou ${pessoa.nome}, e sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else if (pessoa.idade < 65) {
    console.log(`sou ${pessoa.nome}, e sou um adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else {
    console.log(`sou  ${pessoa.nome}, e sou um(a) idoso(a) ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}
