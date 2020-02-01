const argv = require('yargs')
    .command('crear', 'Crear nueva tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea  por hacer'
        }
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea  por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca si la tarea ya fue completado o no'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}