const EventEmitter = require('./event');

function DOM() {}

DOM.prototype = new EventEmitter();
DOM.prototype.constructor = DOM;

DOM.prototype.attachEvent = EventEmitter.prototype.on;

DOM.prototype.detachEvent = EventEmitter.prototype.off;

DOM.prototype.dispatchEvent = EventEmitter.prototype.emit;

module.exports = DOM;
