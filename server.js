const express = require("express");
const http = require("http")
require("./database/db");
const {
    allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access")
const io = require('socket.io')(http);
const userController = require("./controllers/userController");


let app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Test resnpose");
})

app.get("/users", (req, res) => {
    
});

const server = app.listen(3000, () => {
    console.log(`Server is running at ${server.address().address}@${server.address().port}`);
})

app.use("/users", userController);