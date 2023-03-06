const { Schema, model } = require('mongoose');


const userSchema = Schema({
    email: {
        type: String,
        lowercase: true,
    },
    password: {
        type: String,
    },
    name: {type: String },
})



module.exports = userModel = model('userModel',userSchema);
