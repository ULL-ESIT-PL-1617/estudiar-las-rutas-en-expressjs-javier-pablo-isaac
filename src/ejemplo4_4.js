var express = require('express')
var app = express()

var router = express.Router()

router.route('/usuarios')
.get(function(req, res, next) {
  res.send(`get`)
})
.put(function(req, res, next) {
  res.send(`put`)
})
.post(function(req, res, next) {
  res.send(`post`)
})
.delete(function(req, res, next) {
  res.send(`delete`)
});

app.use('/router', router)

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
