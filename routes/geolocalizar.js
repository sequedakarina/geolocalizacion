const express = require("express");
const fs = require("fs");
let app = express();
const Path = require("path");

app.post("/", (req, res) => {
    let ubicacion = navigator.geolocation;

    if (ubicacion) {
        //Validar si hay acceso web a la ubicación
        ubicacion.getCurrentPosition(mostrarUbicacion); //Obtiene la posición
    } else {
        alert("¡Error! Este navegador no soporta la Geolocalización.");
    }
    //Funcion para obtener latitud y longitud
    function mostrarUbicacion(position) {
        var latitud = position.coords.latitude; //Obtener latitud
        var longitud = position.coords.longitude; //Obtener longitud
        var datos = {
            lat: latitud,
            lon: longitud,
        };
        let dataJson = JSON.stringify(datos);
        fs.writeFile("nameFile.json", dataJson);
    }  

   
    res.status(200).json({
        ok: true,
    });
});

module.exports = app;