const anycall = function (instance) {
  if(!(this instanceof anycall)) {
    return new anycall(instance);
  }
  this.action = null;
  const properties = Object.keys(instance);
  properties.map((item) => {
    if (!item) return;
    this.prototype[item] = (...args) => {
      this.action = instance[item];
      return this.sync(...args);
    }
  });
  this.obj = instance;
};

// set action
anycall.prototype.any = function (action) {
  if (this.obj && this.obj[action]) {
    this.action = this.obj[action];
  } else {
    this.action = action;
  }
  return this;
};

// promise wrapper
anycall.prototype.sync = function (...args) {
  return new Promise((resolve, reject) => {
    const closure = (err, ...result) => {
      if (err) {
        return reject(err);
      }
      return result.length > 1 ? resolve(result) : resolve(result.pop());
    };
    args.push(closure);
    this.action.apply(this.obj, args);
  });
};

anycall.prototype.call = function (...args) {
  return this.sync(...args);
};

module.exports = anycall;

