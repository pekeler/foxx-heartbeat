/*global require, module, applicationContext */
'use strict';
const request = require('org/arangodb/request');

const url = applicationContext.configuration.url;

if (url) {
  request.head(url, {});
}
