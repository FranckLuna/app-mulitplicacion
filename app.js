const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require( 'colors' );

// console.log( argv );
//node app.js --base=8
// const [ , , arg3] = process.argv;
// const [ , base ] = arg3.split('=');

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log( nombreArchivo.red, 'creado'))
    .catch(err => console.log( err ))