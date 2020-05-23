const express = require('express');
const app = express()
const http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendfile('save.html');
})

http.listen(1998, function() {
    console.log("Your Are Ready To Use The Server")
})