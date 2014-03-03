var co = require ('co');
var iron = require ('./');
var seal = iron.seal
var unseal = iron.unseal

describe('Iron', function(){

  it ('should seal and unseal the object', function (done) {
    
    var obj = { a : 1, b : [1, 2,3]};
    var password = 'thunkthunk';

    co (function * () {
      
      var sealed = yield seal (obj, password, iron.defaults);
      var unsealed = yield unseal (sealed, { default : password}, iron.defaults);

      unsealed.a.should.equal(1);
      unsealed.b.length.should.equal(3);

    })(done);

  });
});

