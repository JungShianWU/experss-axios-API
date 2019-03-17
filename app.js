var express = require('express');
var app = express();
var axios = require('axios');
const URL = 'https://works.ioa.tw/weather/api/towns/50.json';



app.get('/', function (req, res) {
    axios.get(URL)
        .then(res => res.data)
        .then(data => res.send(data).json)


})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Axios server start!! "));