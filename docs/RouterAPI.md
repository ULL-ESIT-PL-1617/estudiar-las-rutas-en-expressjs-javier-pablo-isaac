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
      next(new Error('failed to load user'));
    }
  });
});
```
