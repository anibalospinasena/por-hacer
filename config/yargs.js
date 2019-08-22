const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Confirmar si la tarea esta completada'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas')
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};