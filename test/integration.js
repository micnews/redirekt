var test = require('tape');
var redirekt = require('..');
var http = require('http');
var serverTest = require('servertest');

var testUrl = 'http://www.mic.com';

var server = http.createServer(function (req, res) {
  redirekt(req, res, testUrl);
});

test('redirekt integation tests', function (t) {
  serverTest(server, '/', {}, function (err, res) {
    t.notOk(err, 'it should not throw an error');
    t.equal(res.headers.location, testUrl,
      'it sets the location header to the redirect url');
    t.equal(res.statusCode, 301,
      'it sets the status code to 301');
  });

  t.end();
});
