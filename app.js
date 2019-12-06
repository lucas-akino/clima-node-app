const { argv }  = require('./src/yargs/yargs');
const lugar = require('./src/lugar/lugar');
const clima = require('./src/clima/clima');
const colors    = require('colors');


// lugar.getLugarLatLng(argv.direccion)
//     .then(
//         console.log
//     );


// clima.getClima(-34.610001, -58.369999)
//     .then(console.log);

const getInfo = async (direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
    
        const temp = await clima.getClima(coords.lat, coords.lon);
        
        return `\n${
            colors.yellow(coords.direccion)
            }\n\n  Temperatura:         ${
            colors.green(temp.temperatura, 'ºC.')
            }\n  Temperatura Minima:  ${
            colors.cyan(temp.tempMin, 'ºC.')
            }\n  Temperatura Maxima:  ${
            colors.red(temp.tempMax, 'ºC.')
        }\n`;
        
    } catch (e) {
        return `No se encontro el clima de "${direccion}".`.red;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

