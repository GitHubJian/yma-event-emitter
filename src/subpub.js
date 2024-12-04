const EventEmitter = require('./event');

function Subpub() {}

Subpub.prototype = new EventEmitter();
Subpub.prototype.constructor = Subpub;

Subpub.prototype.subscribe = EventEmitter.prototype.on;

Subpub.prototype.publish = EventEmitter.prototype.emit;

Subpub.prototype.unsubscribe = EventEmitter.prototype.off;

module.exports = Subpub;
