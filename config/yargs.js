
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b)){
                        throw 'la base debe ser un numero'
                    }
                    return true;
                } )
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    desc: 'Muestra la tabla de multiplicar por consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Indica hasta que numero multiplicar la base'
                })
                .argv;

module.exports = argv;