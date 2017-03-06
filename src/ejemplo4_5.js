var express = require('express');
var app = express();
var router = express.Router();

// Todas las peticiones al router llegarán aquí
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

// Sólo si la solicitud va a /bar
router.use('/especial', function(req, res, next) {
  res.send('Especial')
});

// Siempre invocada
router.use(function(req, res, next) {
  res.send('Hello World');
});

app.use('/router', router);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
