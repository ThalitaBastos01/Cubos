const produtosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quantidade: 3
    },
    {
        nome: "Cerveja",
        precoUnit: 100,
        quantidade: 2
    },
    {
        nome: "Agua",
        precoUnit: 500,
        quantidade: 1
    }
];

const cartao = {
    nome: "josé",
    idade: 30,
    produtosConsumidos
};

console.log(cartao.nome); // josé
console.log(cartao.idade); // 30
cartao.idade = 31; 
console.log(cartao.idade); // 31
console.log(cartao.produtosConsumidos[0].nome);
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);
