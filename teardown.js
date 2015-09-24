/*global require, module, applicationContext */
'use strict';
const Foxx = require('org/arangodb/foxx');

Foxx.queues.delete('heartbeat');
