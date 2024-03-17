// setInterval(() => {
// console.log('Olá Alunos e Alunas!')
// }, 2000) // 2000 correspondem a 2 segundos



// segunda opção que imprime exatamente o mesmo codigo
// const imprimir = () => {
//     console.log('Ola Branquinha!')
//     clearInterval(interval)
// }

// const interval = setInterval(imprimir, 2000)

let numero = 10; 

const contador = setInterval(function(){
    console.log(numero);
    numero--;
    if (numero === 0){
        console.log('Boooooooooooom!');
        clearInterval(contador);
    }
}, 1000);