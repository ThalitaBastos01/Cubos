const frase = "Eu amo a Cubos Academy, e amo muito!";

const index = frase.indexOf("amo");

console.log(index);

//saber se um email valido
// tem que ter pelo menos 1 @
// tem que ter pelo menos um ponto depois do @

const possiveEmail = "jose@cubos.academy";

const indexArroba = possiveEmail.indexOf("@"); // 4

const indexPontoAposArroba = possiveEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições");
} else {
    console.log("não há nenhum ponto apos o arroba")
}