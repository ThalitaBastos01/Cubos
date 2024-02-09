const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComOsPais = false;

// tem ingresso e tem idade maior ou igual a censura OU está com os pais


if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("pode entar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}