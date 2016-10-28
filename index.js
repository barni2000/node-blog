const express = require('express');
var app = express();

app.use('/static', express.static('static'));
app.use('/static', express.static('node_modules'));

require('./routes/routes')(app);
var server = app.listen(3000, function () {

});
