const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const { readData } = require("./utils/file.js");
const userRouter = require("./router/user.js");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
    .connect(uri)
    .then(async () => {
        console.log("Connected to MongoDB Server");

        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`error: ${err}`);
    });
