const EventEmitter = require('./event');

function Observer() {
    this.emitter = new EventEmitter();
    this.eventname = 'observer';
}

Observer.prototype.add = function (observer) {
    this.emitter.on(this.eventname, observer);
};

Observer.prototype.notify = function (context) {
    const args = Array.prototype.slice.call(arguments, 1) || [];

    this.emitter.emit.apply(context, args);
};

Observer.prototype.removeObserver = function (observer) {
    this.emitter.off(this.eventname, observer);
};

Observer.prototype.removeAllObservers = function () {
    this.emitter.removeAllListeners(this.eventname);
};

module.exports = Observer;
