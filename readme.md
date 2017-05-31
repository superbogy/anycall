# anycall
  callback convert to promise
--------
### get start
 `node > 6.*`
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
 
 version >= 1.1.0 surpport
 ```
 anycal(obj).foo(11);
 
 ```
 
### change log
    + 1.1.0 add 