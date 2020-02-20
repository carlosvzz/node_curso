const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(32.790001, -96.800003)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(dir) => {
    try {
        const dataLugar = await lugar.getLugarLatLng(dir);
        const temperatura = await clima.getClima(dataLugar.lat, dataLugar.lng);
        return `El clima de ${dataLugar.direccion} es de ${temperatura} C.`;

    } catch (e) {
        return `No se pudo determina el clima de ${dir}. Error ${e}`;

    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)