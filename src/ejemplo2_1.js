var express = require('express')
var app = express()


app.get('/', function (req, res, next) {
  res.send('Petición GET a la página principal')
  next();
})

app.post('/', function (req, res, next) {
  res.send('Petición POST a la página principal');
  next();
})
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
   next();// Pasa el control al siguiente manejador.
});
// Método de direccionamiento POST

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
