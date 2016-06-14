# redirekt [![Build Status](https://travis-ci.org/micnews/redirekt.svg?branch=master)](https://travis-ci.org/micnews/redirekt)

A library that provides a simple lightweight method for redirecting http requests in your applications!

## Installation

```shell
npm install redirekt
```

## Usage

Use `redirekt` like this: `redirekt(req, res, targetUrl)`!

```javascript
var http = require('http');
var redirekt = require('redirekt');

var server = http.createServer(function (req, res) {
  redirekt(req, res, 'http://www.themostamazingwebsiteimaginable.com');
});
```
