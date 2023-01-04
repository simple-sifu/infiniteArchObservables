export default class EagerObservable {
  // can't declare variables with let, or const
  // otherwise it will show errors.
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

  // did not call notify but called function right away.
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
