var express = require('express')
var app = express()

var router = express.Router()

router.param('name', function(req, res, next, name) {

  var modified = name + '-tutu'

  req.name = modified

  next();
});

router.get('/usuario/:name', function(req, res){
  res.send('Modificado: ' + req.name);
});

app.use('/router', router)

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
