const { argv } = require('../yargs/yargs');
const axios = require('axios');
const colors = require('colors');

const getLugarLatLng = async (dir) => {

    const encodedURL = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'X-RapidAPI-Key': 'b0341808ccmsh49dba30e3904e3cp1265f2jsn06797dab0359'
        }
    })
    
    const resp      = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se ha encontrado resultados de ${dir}`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat       = data.lat;
    const lon       = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}


module.exports = {
    getLugarLatLng
};
