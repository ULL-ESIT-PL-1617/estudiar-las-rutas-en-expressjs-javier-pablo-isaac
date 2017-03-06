var express = require('express')
var app = express()

app.get('/ejemplo/b', function (req, res, next) {
  console.log('La respuesta será enviada por la siguiente función...');
  next();
}, function (req, res) {
  res.send('Hola desde B!');
});

var primera_funcion = function (req, res, next) {
  console.log('Primera función');
  next();
}

var segunda_funcion = function (req, res, next) {
  console.log('Segunda función');
  next();
}

var tercera_funcion = function (req, res) {
  res.send('Tercera funcion');
}

app.get('/ejemplo/c', [primera_funcion, segunda_funcion, tercera_funcion]);

var primera_funcion = function (req, res, next) {
  console.log('Primera función');
  next();
}

var segunda_funcion = function (req, res, next) {
  console.log('Segunda función');
  next();
}

app.get('/ejemplo/d', [primera_funcion, segunda_funcion], function (req, res, next) {
  console.log('La respuesta será enviada por la siguiente función');
  next();
}, function (req, res) {
  res.send('Hola desde D!');
});



app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
