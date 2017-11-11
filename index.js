'use strict';

var rp = require('request-promise-native');

function Client(options) {
  this._baseUrl = 'http://localhost:9000'
};

Client.prototype.get = async function(uuid, r) {
  let options = {
    url : this._baseUrl + "/get",
    qs: {
      'id' : uuid,
      'r'  : r
    }
  }
  return rp(options);
};

Client.prototype.put = async function(uuid, data, w) {
  let options = {
    method: 'POST',
    uri: this._baseUrl + '/put',
    body: {
      'id'    : uuid,
      'value' : data,
      'w'     : w
    },
    json: true // Automatically stringifies the body to JSON
  };
  return rp(options);
};

module.exports = Client;
