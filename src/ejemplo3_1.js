var express = require('express')
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.get('/user/:nombre', function (req, res, next) {
  console.log('ID:', req.params.nombre);
  next();
}, function (req, res, next) {
  res.send('Nombre: ' + req.params.nombre);
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
