const express = require ("express");
const path = require ("path");

const app = express ();
const publicPath = path.resolve (__dirname, "./public");

app.use (express.static (publicPath));

app.get ("/", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./Views/home.html"))
} )

app.get ("/register.html", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./Views/register.html"))
} )

app.get ("/login.html", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./Views/login.html"))
} )

app.listen(process.env.PORT || 3000, function () {
    console.log ("Servidor funcionando en puerto 3000")}
);