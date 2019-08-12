process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const http = require('http');

var express = require('express');
var path = require('path');

var app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.static(path.join(__dirname, './views')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});


module.exports = app;

const server = http.createServer(app);
server.listen(port, () => console.log('Server is runing in ' + process.env.NODE_ENV + ' mode at http://localhost:' + port));