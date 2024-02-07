const temIngresso = true;
const censura = 16;
const idade = 14;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("pode entrar");
    } else {
        console.log("Barrada pela censura.")
    }
} else {
    console.log("Barrada por falta de ingresso.")
}