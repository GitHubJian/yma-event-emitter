const Event = require('./event');
const DOM = require('./dom');
const Subpub = require('./subpub');
const ObserverByEvent = require('./observer-by-event');
const Observer = require('./observer');
const Register = require('./register');
const Tabable = require('./tabable');

createEmitter.Event = Event;
createEmitter.DOM = DOM;
createEmitter.Subpub = Subpub;
createEmitter.ObserverByEvent = ObserverByEvent;
createEmitter.Observer = Observer;
createEmitter.Register = Register;
createEmitter.Tabable = Tabable;

const EmitterTypes = {
    Event: 0,
    DOM: 1,
    Subpub: 2,
    ObserverByEvent: 3,
    Observer: 4,
    Register: 5,
    Tabable: 6,
};
createEmitter.EmitterTypes = EmitterTypes;

function createEmitter(type = EmitterTypes.Event) {
    switch (type) {
        case EmitterTypes.Event:
            return new Event();
        case EmitterTypes.DOM:
            return new DOM();
        case EmitterTypes.Subpub:
            return new Subpub();
        case EmitterTypes.ObserverByEvent:
            return new ObserverByEvent();
        case EmitterTypes.Observer:
            return new Observer();
        case EmitterTypes.Register:
            return new Register();
        case EmitterTypes.Tabable:
            return new Tabable();
    }
}

module.exports =
    createEmitter['default'] =
    createEmitter.createEmitter =
        createEmitter;
