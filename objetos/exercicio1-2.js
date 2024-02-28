const pessoa = {
    nome: "Thalita",
    idade: 24,
    altura: 1.65,
    temCNH: false,
    apelidos: ["tata", "thali"]
};

//let textoCNH = (condicao ? valorVerdadeiro : valorFalso); condição ternaria
const textoCNH = pessoa.temCNH ? "possui CNH" : "Não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCNH} e tem os seguintes apelidos: `)

for (let apelido of pessoa.apelidos) {
    console.log(` - ${apelido}`);
}

