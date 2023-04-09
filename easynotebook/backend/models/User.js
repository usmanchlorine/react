const mongoose = require('mongoose')

// for model to create schema and then create model give the name and schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,

    },


    date: {
        type: Date,
        default: Date.now
    },


})

const User = mongoose.model('user', UserSchema) //
// User.createIndexes(); //Creates a unique index so that the collection will not accept insertion or update of documents where the index key value matches an existing value in the index.
module.exports = User