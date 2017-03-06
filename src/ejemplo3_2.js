var express = require('express')
var app = express();

app.get('/user/:nombre', function (req, res, next) {
  res.send('Nombre: ' + req.params.nombre);
  // Pasa el control a la siguiente ruta.
  next('route');
  // el control pasa a la siguiente función en la pila
  next(); //si no estuviera está llamada, no se ejecutaría el middleware que está en la pila å
}, function (req, res, next) {
  // render a regular page
    console.log('Función en la pila');
});

app.get('/user/:id', function (req, res, next) {
    console.log('Función 2');
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
