# anycall
  callback convert to promise

--------
### get start
 npm install anycall --save
 ```
 const obj = {
  foo(id, callback) => {
    callback(null, id);
  }
 } 
 new anycall(obj).any('foo').call(11);

 or

 new anycall().any(obj.foo).call(11);
 ```
