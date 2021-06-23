const express = require('express');
const app = express();
app.use("/lugar",require("./geolocalizar"));
module.exports = app;
