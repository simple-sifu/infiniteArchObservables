export default class EagerObservable {
  _value = null;
  observers = [];

  constructor(initialValue) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  subscribe = (func) => {
    this.observers.push(func);
    func(this);
  };

  notify = () => {
    this.observers.forEach((observer) => {
      observer(this);
    });
  };
}
