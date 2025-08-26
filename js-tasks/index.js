function Counter({ root, initialValue, step = 1 }) {
  this._value = initialValue;
  this._step = step;
  this._root = root;

  this._refs = this._getRefs(this._root);
  this.changeUi();
  this.bindEvents();
}

Counter.prototype.increment = function () {
  this._value += this._step;
};

Counter.prototype.decrement = function () {
  this._value -= this._step;
};

Counter.prototype._getRefs = function (root) {
  const refs = {};

  refs.container = document.querySelector(root);
  refs.incrementBtn = refs.container.querySelector("[data-incrementBtn]");
  refs.decrementBtn = refs.container.querySelector("[data-decrementBtn]");
  refs.value = refs.container.querySelector("[data-value]");

  return refs;
};

Counter.prototype.bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.changeUi();
  });
  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.changeUi();
  });
};

Counter.prototype.changeUi = function () {
  this._refs.value.textContent = this._value;
};

const counter = new Counter({ root: "#container", initialValue: 10 });
