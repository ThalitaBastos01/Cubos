//function inverterString(texto) {
//    const arrayDeLetras = texto.split("");
//    arrayDeLetras.reverse();

//    let textoInvertido = "";
//    for (let letra of arrayDeLetras) {
// textoInvertido = textoInvertido + letra;
//        textoInvertido += letra;
//    }
//    console.log(textoInvertido);
//}

//inverterString("Cubos Academy")

function inverterString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    const textoInvertido = arrayDeLetras.join("");
    console.log(textoInvertido);
}

inverterString("Cubos Academy")