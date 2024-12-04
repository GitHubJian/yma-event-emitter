const EventEmitter = require('./event');

function Register() {}

Register.prototype = new EventEmitter();
Register.prototype.constructor = Register;

Register.prototype.register = EventEmitter.prototype.on;

Register.prototype.trigger = EventEmitter.prototype.trigger;

Register.prototype.unregister = EventEmitter.prototype.off;

module.exports = Register;
