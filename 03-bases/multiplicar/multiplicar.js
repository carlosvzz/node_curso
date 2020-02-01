//requireds
const { writeFile } = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10, listar) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de base introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor de límite introducido ${limite} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n `;
        }

        if (listar == true) {
            console.log('============='.green);
            console.log(`Tabla del ${ base }`.green);
            console.log('============='.green);

            resolve(data);

        } else {
            writeFile(`tablas/tabla-${base}.txt `, data, (err) => {
                if (err) reject(err)
                else
                    resolve(`tabla-${base}.txt`);
            });
        }




    })
}

module.exports = {
    crearArchivo
}