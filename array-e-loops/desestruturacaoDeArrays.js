const array = [1,2,3,4,5,6];

//const a = array[0];
//const b = array[1];

const [a, b, ...resto] = array;
// [a, b] = são as variaveis que eu criei ... (= array ) é o array que eu quero desestruturar.
console.log(a, b, resto);