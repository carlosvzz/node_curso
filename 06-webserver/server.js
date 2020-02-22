const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     // res.send('Hello world!!');
//     let salida = {
//         nombre: 'Carlos',
//         apellido: 'Vazquez',
//         url: req.url
//     }

//     res.send(salida);
// })

// app.get('/data', (req, res) => {
//     res.send('Hello data!!');

// })

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
});