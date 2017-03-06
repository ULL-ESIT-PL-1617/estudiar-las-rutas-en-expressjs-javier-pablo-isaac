var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Estás en la ruta raíz');
});

app.get('/home', function (req, res) {
  res.send('Estás en el home de la página web');
});

app.get('/p?eso', function(req, res) {
  res.send('p?eso');
});

app.get('/p+eso', function(req, res) {
  res.send('?peso');
});

app.get(/a/, function(req, res) {
  res.send('/a/');
});

app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});




app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
