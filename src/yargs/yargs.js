

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad donde se quiere obtener el clima',
            demand: true
        }
    }).argv;


module.exports = {
    argv
};

