var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var inhumadoSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },    
    fecha: { type: String, required: [true, 'la fecha es necesaria' ]},
    empresa: { type: String, required:true },
    hora: { type: String, required: [true, 'La hora es necesaria'] }

});

module.exports = mongoose.model('muertos', inhumadoSchema);