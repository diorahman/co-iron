/**
 * Module dependencies.
 */

var iron = require ('iron');
var thunkify = require ('thunkify');

Object.keys (iron).forEach(function (k) {
  if (typeof iron[k] == 'function') {
    module.exports[k] = thunkify (iron[k]);
  } else {
    module.exports[k] = iron [k];  
  }
});