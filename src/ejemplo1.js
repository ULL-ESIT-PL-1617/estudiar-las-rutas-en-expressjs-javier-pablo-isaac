// Responderá a las peticiones GET en la raíz
app.get('/', function (req, res) {
  res.send('GET')
})

// Responderá a las peticiones POST en la raíz
app.post('/', function (req, res) {
  res.send('POST')
})

// Responderá a las peticiones HEAD en la raíz
app.head('/', function (req, res) {
  res.send('HEAD')
})

app.put('/', function (req, res) {
  res.send('PUT')
})

app.delete('/', function (req, res) {
  res.send('DELETE')
})

app.connect('/', function (req, res) {
  res.send('CONNECT')
})

app.options('/', function (req, res) {
  res.send('OPTIONS')
})

app.trace('/', function (req, res) {
  res.send('TRACE')
})

app.path('/', function (req, res) {
  res.send('PATH')
})
