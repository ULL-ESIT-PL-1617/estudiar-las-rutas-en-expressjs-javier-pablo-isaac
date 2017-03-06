var express = require('express')
var app = express()
var path = require('path')


app.set('views', path.join('views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/user/:username', function (req, res) {

	res.render('kitten', { name: req.params.username });
  console.log('Request Type:', req.method);
  console.log('Request Path:', req.path);
  console.log('req.params.username: '+(req.params.username));
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
