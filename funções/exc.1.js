const pessoaObj = {
    nome: "Thalita",
    idade: 24,
    profissão: "ecoomerce",
    altura: 1.55
};

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, Sou uma Jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`);
}

apresentar(pessoaObj);