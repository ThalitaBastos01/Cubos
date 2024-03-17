const nomes = ['joao', 'maria', 'jose', 'rodrigo'];
const numeros = [4]

// const resultado = nomes.some((nome) => {
//     return nome === 'joao';
// });
// console.log(resultado);

const resultado = numeros.some((numero) => {
    return numero % 2 === 0; // assim que descobrimos se um numero ele é par ou impar, se o resto (%) da divisao for 2 ele é par se for 0 é impar. 
});
console.log(resultado);

// const imparesEPares = numeros.some((numero) => {
//     if (numero % 2 === 0) {
//         console.log('Tem numero par')
//     } else {
//         console.log('nao tem numero par')
//     }
   
// })