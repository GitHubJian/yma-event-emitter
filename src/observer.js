function Observer() {
    this.observers = [];
}

Observer.prototype.add = function (observer) {
    const that = this;
    this.observers.push(observer);

    return function () {
        that.removeObserver(observer);
    };
};

Observer.prototype.notify = function (context) {
    const args = Array.prototype.slice.call(arguments, 1) || [];
    let observers = this.observers;

    for (let i = 0; i < observers.length; i++) {
        const observer = observers[i];
        observer.apply(context || null, args);
    }
};

Observer.prototype.removeObserver = function (observer) {
    let observers = this.observers;

    for (let i = 0; i < observers.length; i++) {
        if (observers[i] === observer) {
            observers.splice(i, 1);
        }
    }
};

Observer.prototype.removeAllObservers = function () {
    this.observers = [];
};

module.exports = Observer;
