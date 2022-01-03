const { assert, Console } = require("console");
const express = require("express");
const { use } = require("express/lib/application");
var router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

function addUser(nickName, password, firstName, lastName, email, dateOfBirth, country, city) {
    var user = new User();
    user.nickName = nickName;
    user.password = password
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.dateOfBirth = dateOfBirth
    user.country = country;
    user.city = city;
    user.save((err, doc) => {
        if (!err) {
            console.log(`Added new user ${user.nickName}`);
        } else {
            console.log("Error during adding new user: " + err);
        }
    });
    return user._id.valueOf();
}

function removeUser(id) {
    User.findByIdAndRemove(id, (err, doc) => {
        if (!err) {
            console.log(`Removed user with id ${id}`)
        } else {
            console.log("Error during removing user: " + err);
        }
    })
}

router.get("/list", (req, res) => {
    User.find((err, users) => {
        if(!err) res.send(users);
        else console.log("Error during listing users " + err);
    })
});

router.post("/addUser", (req, res) => {
    let date = new Date(req.body.birthday_year, 
        req.body.birthday_month, req.body.birthday_day);
    let id = addUser(req.body.nickname, req.body.password, req.body.firstname, req.body.lastName, req.body.email, date, req.body.country, req.body.city);
    res.send("Added new user with id: " + id);
})

module.exports = router