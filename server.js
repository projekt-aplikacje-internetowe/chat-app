const express = require("express");
require("./database/db");
const {
    allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access")
const userController = require("./controllers/userController");


let app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Test resnpose");
})

app.listen(3000, () => {
    console.log("Test działansdfsia serwera");
})

app.use("/add", userController);