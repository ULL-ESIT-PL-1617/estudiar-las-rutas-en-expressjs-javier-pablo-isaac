var express = require('express')
var app = express()

var router = express.Router()

// Para rutas acabadas en '/events', dependiendo de dónde se haya 'usado' el router
router.get('/events', function(req, res, next) {
  res.send('Eventos')
});

router.get('/', function(req, res){
  res.send('En el router');
});

//Sólo se usara el router para rutas de la forma '/calendar/*'
app.use('/calendar', router);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
