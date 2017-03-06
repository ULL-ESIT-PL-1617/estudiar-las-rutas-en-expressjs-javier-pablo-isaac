# Router API

### Introducción:

Un objeto router es una instancia aislada de middlewares y rutas. Por tanto, podemos hablar de él como de una "mini aplicación", capaz sólo de realizar funciones middleware y de enrutamiento. Cada aplicación express tiene un "router" instalado.

Un router se comporta como un middleware en sí mismo, por lo que se puede usar como un argumento para `app.use()` o como el argumento a un método `use()` de otro router.

El objeto `express` de más alto nivel cuenta con un método `Router()`, el cual crea un nuevo objeto router.

Con el objeto router creado, podremos aañdir middlewares y métodos HTTP al mismo como si fuera una aplicación. A continuación se muestra un ejemplo:

```javascript
// Ejecutado con cualquier petición pasada al router
router.use(function(req, res, next) {
  // Código...
  next();
});

// Para rutas acabadas en '/events', dependiendo de dónde se haya 'usado' el router
router.get('/events', function(req, res, next) {
  // ..
});
```

El router puede usarse para una raíz de URL en particular, pudiendo dividir las rutas en ficheros o incluso mini-apps.

```javascript
//Sólo se usara el router para rutas de la forma '/calendar/*'
app.use('/calendar', router);
```

### Métodos:

##### router.all(ruta, [callback,...] callback)

Este método encaja con cualquier método HTTP.

La propiedad anterior hace a este método útil para ejecutar una lógica global para prefijos de rutas específicas o coincidencias arbitrarias. Esto es útil, por ejemplo, para exigir que todas las conexiones a partir de cierta ruta requieran autentificación.

```javascript
// Se requiere autentificación a partir de api/
router.all('/api/*', requireAuthentication);
```

##### router.METODO(ruta, [callback, ...] callback)

Estos métodos proveen la funcionalidad de enrutamiento en Express, donde METHOD es uno de los método HTTP en minúscula.

Se pueden dar varios "callback", y son tratadas de forma equitativa, comportándose como middlewares, salvo que éstas pueden llamar a `next()`.

A continuación se muestra el ejemplo más simple de definición de ruta. Hay que destacar que las strings de consultas no se toman en cuenta al emparejas. Por lo que el siguiente ejemplo funciona con "GET/" y "GET/?name=Pablo"

```javascript
router.get('/', function(req, res){
  res.send('hello world');
});
```

##### router.param(name, callback)

Añade disparadores de callbacks a los parámetros de rutas. `nombre` Es el nombre del parámetro y `callback` es la función de callback.

La función callback tiene los siguientes parámetros:
* req
* res
* next
* Valor del parámetro
* Nombre del parámetro

A modo de ejemplo, diremos que cuando :user está presente en una ruta, se puede mapear lógica de carga de usuario para poner req.user en la ruta, o realizar validaciones en la entrada del parámetro.

```javascript
router.param('user', function(req, res, next, id) {

  // Intenta obtener los detalles del user y los añade al objeto "request"
  User.find(id, function(err, user) {
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('Fallo en la carga'));
    }
  });
});
```

El comportamiento del metodo router.param(name, callback) puede ser totalmente cambiado pasando tan solo una funcion a router.param(). Esta funcion es una implementacion de como router.param(name, callback) debe comportarse - acepta dos parametros y debe devolver un middleware.

El primer parámetro es el nombre del parámetro URL que debe ser capturado, el segundo puede ser cualquier objeto javascript que puede ser usado para devolver el middleware.

```javascript
var express = require('express');
var app = express();
var router = express.Router();

// Cambiando el comportamiento router.param()
router.param(function(param, option) {
  return function (req, res, next, val) {
    if (val == option) {
      next();
    }
    else {
      res.sendStatus(403);
    }
  }
});

// Usando el anterior router.param()
router.param('id', 1337);

// Ruta para disparar la captura
router.get('/user/:id', function (req, res) {
  res.send('OK');
});

app.use(router);

app.listen(3000, function () {
  console.log('Ready');
});
```

##### router.route(path)

Este método devuelve una instancia de una ruta individual que puede ser usada posteriormete para manejar métodos HTTP con otros middlewares.

El uso de `router.route()` es recomendable para evitar errores de duplicidad de nombres y fallos similares.

En el siguiente ejemplo, veremos cómo usar `router.route()` para especificar diversos manejadores de métodos HTTP.

```javascript
var router = express.Router();

router.param('user_id', function(req, res, next, id) {
  // Usuario de ejemplo...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});

router.route('/users/:user_id')
.all(function(req, res, next) {
  // Para todos los métodos HTTP
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
})
.put(function(req, res, next) {
  // Un ejemplo de actualización del usuario...
  req.user.name = req.params.name;
  res.json(req.user);
})
.post(function(req, res, next) {
  next(new Error('Sin implementar'));
})
.delete(function(req, res, next) {
  next(new Error('Sin implementar'));
});
```

##### router.use([path], [function, ...] function)

El uso de `use` hace que se use la función middleware especificada, con la ruta también especificada (opcionalmente), que por defecto es `/`.

El método es idéntico al de `app.use()`. A continuación se ilustra con un sencillo ejemplo.

```javascript
var express = require('express');
var app = express();
var router = express.Router();

// Todas las peticiones al router llegarán aquí
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

// Sólo si la solicitud va a /bar
router.use('/bar', function(req, res, next) {
  next();
});

// Siempre invocada
router.use(function(req, res, next) {
  res.send('Hello World');
});

app.use('/foo', router);

app.listen(3000);
```

El camino de montaje se quita y no es visible para la función  middleware. El principal efecto de esta característica es que una función middleware puede operar sin cambios en el codigo independientemente de su prefijo en la ruta.

El orden en el que se 'usan' los middleware es de crucial importancia, al ser estos invocados secuencialmente.

Por ejemplo: Queremos registrar todas las peticiones:

```javascript
var logger = require('morgan');

router.use(logger());
router.use(express.static(__dirname + '/public'));
router.use(function(req, res){
  res.send('Hello');
});
```

En cambio, podemos hacer que las peticiones estáticas no se registren cambiando el orden:

```javascript
router.use(express.static(__dirname + '/public'));
router.use(logger());
router.use(function(req, res){
  res.send('Hello');
});
```

**NOTA**

Aunque los middleware sean añadidos por un router, pueden ser usados en rutas de otros routers. En el siguiente ejemplo, aunque el middleware de autentificación fuese añadido por `authRouter`, podrá ejecutarse en rutas de `openRouter`, puesto que ambos están motados en `/users`. Si queremos evitarlo, deberemos usar diferentes rutas para cada router.

```javascript
var authRouter = express.Router();
var openRouter = express.Router();

authRouter.use(require('./authenticate').basic(usersdb));

authRouter.get('/:user_id/edit', function(req, res, next) {
});
openRouter.get('/', function(req, res, next) {
})
openRouter.get('/:user_id', function(req, res, next) {
})

app.use('/users', authRouter);
app.use('/users', openRouter);
```
