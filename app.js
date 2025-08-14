const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const path = require("path")
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("home");
})




mongoose.connect(uri).then(
  async () => {

    console.log('Connected to MongoDB Server');

    app.listen(PORT, () => {
      console.log(`Connected to port ${PORT}`)
    });
  }).catch((err) => { console.log(`error: ${err}`) });


