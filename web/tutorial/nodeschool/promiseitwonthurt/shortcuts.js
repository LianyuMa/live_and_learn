'use strict';

//Promise.prototype.catch()
var p1 = new Promise(function(resolve, reject) {
  resolve('Succcess');
});

p1.then(function(value) {
  console.log(value);
  throw 'oh, no!';
}).catch(function(e) {
  console.log(e);
}).then(function() {
  console.log('after a catch the chain is restored');
}, function() {
  console.log('Not fired due to the catch');
});

//Promise.resolve(value)
//The Promise.resolve(value) method returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
var p2 = Promise.resolve([1, 2, 3]);
p2.then(function(v) {
  console.log(v[0]);
});

var original = Promise.resolve(true);
var cast = Promise.resolve(original);
cast.then(function(v) {
  console.log(v);
});

var p3 = Promise.resolve({
  then: function(onFullfill, onReject) {
    onFullfill('fulfilled');
  }
});
console.log(p3 instanceof Promise);

p3.then(function(v) {
  console.log(v);
}, function(e) {
  //not called
});

var thenable = { then: function(resolve) {
  throw new TypeError('Throwing');
  resolve('Resolving'); 
}};

var p4 = Promise.resolve(thenable);
p4.then(function(v) {
  //not called
}, function(e) {
  console.log(e); //TypeError: Throwing
});

var thenable1 = { then: function(resolve) {
  resolve('Resolving');
  throw new TypeError('Throwing');
}};

var p5 = Promise.resolve(thenable1);
p5.then(function(v) {
  console.log(v);
}, function(e) {
  //not called
});

//Promise.reject(reason)
//The static Promise.reject function returns a Promise that is rejected. For debugging purposes and selective error catching, it is useful to make reason an instanceof Error.
Promise.reject('Testing static reject').then(function(reason) {
  //not called
}, function(reason) {
  console.log(reason); //'Testing static reject'
});

Promise.reject(new Error('fail')).then(function(error) {
  //not called
}, function(error) {
  console.log(error); //Stacktrace
});