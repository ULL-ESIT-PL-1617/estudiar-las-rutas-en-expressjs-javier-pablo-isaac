var express = require('express')
var app = express()

var ejemplo = require('./modulo');
app.use('/modulo', ejemplo)

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
