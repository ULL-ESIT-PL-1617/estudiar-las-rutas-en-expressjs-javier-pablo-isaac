var express = require('express')
var app = express()

app.route('/libro')
  .get(function(req, res) {
    res.send('Coge un libro al azar');
  })
  .post(function(req, res) {
    res.send('Añade un libro');
  })
  .put(function(req, res) {
    res.send('Actualiza el libro');
  });

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
