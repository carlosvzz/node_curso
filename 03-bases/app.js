import { crearArchivo } from './multiplicar/multiplicar';


let base = 'asv';
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));