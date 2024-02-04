let x = 10, y = 2;

let resultado = x + y;
let mensagem = "A soma de " + x + " e " + y + " é " + resultado; // jeito um pouco mais complicado 
console.log(`A soma de ${x} e ${y} é ${resultado}`); //12
// jeito mais facil
resultado = x-y;
console.log(`A subtração de ${x} e ${y} é ${resultado}`); //8

resultado = x*y; //20
console.log(mensagem);

resultado = x/y; //5
console.log(`A divisão de ${x} e ${y} é ${resultado}`);