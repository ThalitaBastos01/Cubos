function Calculo() {

    const numeros = [0, 5, 3, 69, 45, 18, 13, 2]; //tamanho 8

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        // sera executado para i de 0 até 7 | 8 não sera mais executado
        soma = soma + numeros[i]
    }
    console.log(soma);
}
Calculo()