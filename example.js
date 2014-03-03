var co = require ('co');
var iron = require ('./');
var password = 'thunkthunk';

co (function * () {
  var obj = { a : 1, b : [1, 2,3]};
  var sealed = yield iron.seal (obj, password, iron.defaults);
  var unsealed = yield iron.unseal (sealed, { default : password}, iron.defaults);
  console.log (unsealed);
})();