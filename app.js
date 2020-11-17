const colors = require('colors');
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base ? argv.base : argv.b;
let limit = argv.limite ? argv.limite : argv.l;

switch (comando) {
    case 'listar':
        listarTabla(base, limit)
            .then((data) => console.log(data.green))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(base, limit)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
};