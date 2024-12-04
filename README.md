# Event Emitter

事件触发器

## Install

```sh
npm install yma-event-emitter
```

## Usage

```js
const {createEmitter, EmitterTypes} = require('yma-event-emitter');

// 根据 EmitterTypes 获取不同结构的事件机制，默认 Event
const emitter = createEmitter(EmitterTypes.Event);

emitter.on(eventName, fn);
emitter.off(eventName, fn);
emitter.emit(a, b, c);
```
