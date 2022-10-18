const express = require("express");//here we import the framework o modul'express'
const path = require("path");//para concatenar la ruta

const app = express();

app.get("/", (req, res) => {
    // res.send("Hola Will, que tal");
    res.sendFile(path.join(__dirname + "/index.html"));//forma automatizada de tomar una ruta
});

app.listen(3000, () => {
    console.log("server , listening on port", 3000);
});