const { assert } = require("console");
const express = require("express");
const { use } = require("express/lib/application");
var router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

function addUser(nickName, firstName, lastName, email, dateOfBirth, country, city) {
    var user = new User();
    user.nickName = nickName;
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
    return user._id.valueOf()
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

router.post("/", (req, res) => {
    let id = addUser("nickNameTest", "firstNameTest", "lastNameTest", "test4@gmail.com", new Date().getDate(), "countryTest", "cityTest");
    console.log(id);
    removeUser(id)
})




/*
router.get("/", (req, res) => {
    res.render("student/addOrEdit", {
        viewTitle: "Insert Student"
    })
})
router.post("/", (req, res) => {
    if (req.body._id == "") {
        insertRecord(req, res)
    } else {
        updateRecord(req, res)
    }
})
function insertRecord(req, res) {
    var student = new Student()
    student.fullName = req.body.fullName
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city
    student.save((err, doc) => {
        if (!err) {
            res.redirect("student/list")
        } else {
            console.log("Error during insert: " + err)
        }
    })
}
function updateRecord(req, res) {
    Student.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true },
        (err, doc) => {
            if (!err) {
                res.redirect("student/list")
            } else {
                console.log("Error during update: " + err)
            }
        }
    )
}
router.get("/list", (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.render("student/list", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    })
})
router.get("/:id", (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("student/addOrEdit", {
                viewTitle: "Update Student",
                student: doc
            });
            console.log(doc);
        }
    })
})
router.get("/delete/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect("/student/list")
        } else {
            console.log("Error in deletion: " + err)
        }
    })
})
*/
module.exports = router