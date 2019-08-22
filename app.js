const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("\r\nPor hacer-----------------".green);
            console.log("Tarea: " + tarea.descripcion);
            console.log("Completado: " + tarea.completado);
            console.log("Por hacer-----------------\r\n".green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Tarea actualizada');
        } else {
            console.log('Tarea no actualizada');
        }

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Tarea borrada');
        } else {
            console.log('Tarea no borrada');
        }

        break;
    default:
        console.log('comando no existe');
}