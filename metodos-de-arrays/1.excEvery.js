const pessoas = [
    {
    nome: 'Thalita',
    idade: 24
    },
    {
        nome: 'Paulo',
        idade: 19
    },
    {
        nome: 'Joao',
        idade: 15
    },
    {
        nome: 'Maria',
        idade: 38
    }
];

const fiscalizaFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });
    
    if (resultado) {
        console.log('Festa Liberada');
    } else {
        console.log('Possui menor de idade')
    }
}
fiscalizaFesta(pessoas)

        //como eu fiz 
// const verificandoMaioridade = pessoas.every(() => {
//     if (pessoas.idade >= 18) {
//         console.log("Festa Liberada")
//     } else {
//         console.log("Possui menor de idade")
//     }
    
// });

