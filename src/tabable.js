const EventEmitter = require('./event');

function Tabable() {}

Tabable.prototype = new EventEmitter();
Tabable.prototype.constructor = Tabable;

Tabable.prototype.tap = EventEmitter.prototype.on;

Tabable.prototype.call = EventEmitter.prototype.emit;

module.exports = Tabable;
