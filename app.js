const {crearArchivo} = require('./helpers/multiplicar');
const {argv} = require('./config/yargs');


require('colors');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log(`la base de yargs = ${argv.base}`);

// as+i se sacan los argumentos enviados desde consola de forma muy rudimentaria
// const [ , , arg3] = process.argv;
// const [ , base] = arg3.split('=');


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`El archivo ${ nombreArchivo.green } ha sido creado`))
    .catch(err => console.log(err))