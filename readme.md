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
 }; 
 anycall(obj).any('foo').call(11);

 or

 anycall().any(obj.foo).call(11);
 ```
