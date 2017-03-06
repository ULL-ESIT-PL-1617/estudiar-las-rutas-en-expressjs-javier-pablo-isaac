var express = require('express')
var app = express()

var router = express.Router()

// Se requiere autentificación a partir de api/
router.all('/api/*', function(req,res){
  res.send('Autorización requerida!')
});

router.get('/', function(req, res){
  res.send('En el router');
});

app.use('/router', router)

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
