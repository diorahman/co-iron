# co-iron

[Iron](https://github.com/spumko/iron) thunkified

```
$ npm install co-iron --save
```

```js

var co = require ('co');
var iron = require ('co-iron');
var password = 'thunkthunk';
var seal = iron.seal
var unseal = iron.unseal

co (function * () {
  var obj = { a : 1, b : [1, 2,3]};
  var sealed = yield seal (obj, password, iron.defaults);
  var unsealed = yield unseal (sealed, { default : password}, iron.defaults);
  console.log (unsealed);
})();

```

# LICENSE 

MIT