var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
