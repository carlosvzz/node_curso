const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodedUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "1145903e6amsh3525196f9f2102ap19d54fjsne5a4e4f4611e"
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERROR!!!!!', err);
    })