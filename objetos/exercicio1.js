const pessoa = {
    nome: "Thalita",
    idade: 24,
    altura: 1.65,
    temCNH: true,
    apelidos: ["tata", "thali"]
};

let textoCNH = "";

if (pessoa.temCNH) {
    textoCNH = "Possui CNH";
} else {
    textoCNH = "Não possui CNH";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCNH} e tem os seguintes apelidos: 
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`)