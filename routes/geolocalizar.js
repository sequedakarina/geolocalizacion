if (navigator.geolocation) {
    //check if geolocation is available
    navigator.geolocation.getCurrentPosition((position) => {
        let latitud = position.coords.latitude; //Obtener latitud
        let longitud = position.coords.longitude; //Obtener longitud

        let datos = {
            lat: latitud,
            lon: longitud,
        };

        let dataJson = JSON.stringify(datos);

        var blob = new Blob([dataJson], { tipo: "text / plain; charset = utf-8" });
        console.log(blob, "blob");

        // let file = new File([blob], "jsonKarina", { lastModified: Date.now() });
    });
}