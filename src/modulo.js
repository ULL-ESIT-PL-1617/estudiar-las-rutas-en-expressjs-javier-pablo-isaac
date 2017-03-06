var express = require('express');
var router = express.Router();

//middleware que es específico para este router.
router.use(function timeLog(req, res, next) {
  console.log('Hora: ', Date.now());
  next();
});
// Defina la página principal del route.
router.get('/', function(req, res) {
  res.send('Página principal');
});
//Define el "about" del route
router.get('/about', function(req, res) {
  res.send('Sobre la aplicación');
});

module.exports = router;
