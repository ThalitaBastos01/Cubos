const aquivoSeguro = ['teste.txt', 'foto.png', 'contrato.doc', 'instalador.exe']


const antiVirus = (arrayArquivo) => {
    const resultado = arrayArquivo.some((arquivoSeguro) => {
        const existeExtensao = arrayArquivo.indexOf('.bat');

        return existeExtensao !== -1
    })
    if (resultado) {
        console.log('Virus detectado');
    } else {
        console.log('Nenhum virus encontrado')
    }
}

antiVirus(aquivoSeguro)