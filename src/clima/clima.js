const axios = require('axios');


const getClima      = async (lat, lon) => {

    let resp        = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=75534c373268bab82e1fe82b87d63974&units=metric`);
    
    let temperatura = resp.data.main.temp;
    let tempMin     = resp.data.main.temp_min;
    let tempMax     = resp.data.main.temp_max;

    return {
        temperatura,
        tempMin,
        tempMax
    }
}

module.exports      = {
    getClima
};



