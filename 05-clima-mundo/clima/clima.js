const axios = require('axios');


//9dca9c1d76075f70426e6af39db9e905
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9dca9c1d76075f70426e6af39db9e905&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}