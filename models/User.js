/**
 * Modulo para manejo en memoria de los usuarios en la base de datos de MongoDB
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);