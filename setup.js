/*global require, module, applicationContext */
'use strict';
const Foxx = require('org/arangodb/foxx');

const queue = Foxx.queues.create('heartbeat');
queue.all().forEach(function (jobId) {
  queue.delete(jobId);
});
const intervalInSeconds = applicationContext.configuration.interval;
queue.push(
  {mount: applicationContext.mount, name: 'beat'},
  {interval: intervalInSeconds},
  {repeatTimes: -1, repeatDelay: intervalInSeconds * 1000}
);

require('console').log('heartbeat started');
