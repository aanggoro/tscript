"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var promise = new es6_promise_1.Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log("I Get called", res == 123);
});
promise["catch"](function (err) {
    console.log("it's false");
});
