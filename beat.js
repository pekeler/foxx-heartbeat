/*global require, module, applicationContext */
'use strict';
const request = require('org/arangodb/request');

const configuredUrl      = applicationContext.configuration.url;
const configuredInterval = applicationContext.configuration.interval;
const currentInterval    = applicationContext.argv[0].interval;

if (currentInterval !== configuredInterval) {
  require('console').log('heartbeat reconfigured');
  require('setup');
} else if (configuredUrl) {
  request.head(configuredUrl, {});
}
