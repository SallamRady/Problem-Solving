class EventEmitter {
  tracker = new Map();

  subscribe(eventName, callback) {
    this.tracker.set(
      eventName,
      (this.tracker.get(eventName) || new Set()).add(callback)
    );
    return {
      unsubscribe: () => {
        this.tracker.get(eventName)?.delete(callback);
      },
    };
  }

  emit(event, args = []) {
    const callbacks = this.tracker.get(event);
    if (!callbacks) {
      return [];
    }
    return [...callbacks].map((callback) => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
