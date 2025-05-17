//const { rejects } = require('assert');
//const { resolve } = require('path');
const fs = require('fs');
const colors = require('colors/safe');

// const crearArchivo = ( base = 5 ) =>{

//     return new Promise( (resolve, rejects) =>{
//         let salida = '';

//         for(let i = 1; i <= 10; i++){
//         salida += (`${base} x ${i} = ${base * i}\n`)
//         }
//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`)
//     }) 
// };

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) =>{
    try {
        let salida  = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += (`${ base } x ${ i } = ${ base * i }\n`)
            consola += (`${ colors.green( base )} x ${ colors.red( i )} = ${ colors.blue( base * i )}\n`)
         
        }

        if( listar ) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;    
    } catch (err) {
        throw err;
    }
};

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}
