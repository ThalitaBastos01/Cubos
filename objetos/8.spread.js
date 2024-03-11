// spread = espalhar

const pessoa = {
    nome: "José",
    idade: 20,
    cidade: "Salvador",
    profissao: "Dev"
};

const endereco = {
    rua: "Pêra Marmelo",
    numero: "499",
    bairro: "Bairro legal"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido)