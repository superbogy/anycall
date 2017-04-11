const anycall = function(instance) {
  this.action = null;
  this.obj = instance;
}

// set action
anycall.prototype.any = (action) => {
  if (this.$obj && this.$obj[method]) {
    this.$method = this.$obj[method];
  } else {
    this.$method = method;
  }
  return this;
};

// promise wrapper
anycall.prototype.call = (...args) => {
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
