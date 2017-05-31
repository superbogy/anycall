const anycall = function (instance) {
  if(!(this instanceof anycall)) {
    return new anycall(instance);
  }
  this.action = null;
  this.obj = instance;
  const properties = Object.keys(this.obj);
  properties.map((item) => {
    if (!item) return;
    anycall.prototype[item] = (...args) => {
      this.action = this.obj[item];
      return this.sync(...args);
    }
  });
  console.log(anycall.prototype);
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
