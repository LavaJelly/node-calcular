const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {

    let salida = '';
    let consola = '';

    consola += '*****************\n'.green;
    consola += `   ${'Tabla del'.green} ${ colors.blue(base) }\n`
    consola += '*****************\n'.green;

    for (let x = 0; x <= hasta; x++) {
        consola += `${base} ${'x'.green} ${x} ${'='.green} ${x * base} \n`;
        salida += `${base} x ${x} = ${x * base} \n`;
    }

    if(listar){
        console.log(consola);
    }

    // si no se especifica el path toma la dirección base
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


    return(`tabla-${base}`);
}

module.exports = {
    crearArchivo
}