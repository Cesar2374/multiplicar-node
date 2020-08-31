const {argv} = require('./config/yargs')
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch(comando){
  case 'listar':
    // console.log('Listar')
    listarTabla(argv.base, argv.limite)
      .then(lista => console.log(lista))
      .catch(error => console.log(error))
    break;

  case 'crear':
    // console.log('Crear')
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
      .catch(error => console.log(error));
  break;

  default:
    console.log('Comando no reconocido')
}


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(argv.base);

