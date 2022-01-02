const mongoose = require("mongoose");
const validator = require("validator");
const { CountryCodes } = require("validator/lib/isISO31661Alpha2");

let userSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: 'Nickname is required'
    },
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validator.isEmail, 'Please fill a valid email address']
    },
    dateOfBirth: {
        type: Date,
        required: 'Date of birth is required'
    },
    country : {
        type: String,
    },
    city : {
        type: String
    }
})

mongoose.model("User", userSchema);
//nickname, firstname, lastname, email, date of birth, country, city