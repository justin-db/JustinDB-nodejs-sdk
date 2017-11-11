'use strict';

var Promise = require('es6-promise').Promise;

function Client(options) { };

Client.prototype.get = async function() {
  return new Promise(function (resolve, reject) {
    resolve("GET data from justindb");
  });
};

Client.prototype.put = async function() {
  return new Promise(function (resolve, reject) {
    resolve("PUT data to justindb");
  });
};

module.exports = Client;
