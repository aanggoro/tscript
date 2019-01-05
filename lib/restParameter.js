"use strict";
// "..." symbol to allow you to quickly accept multiple arguments in your function and get them as an array
function iTakeItAll(first, second, ...allOthers) {
    console.log(first, second, allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'bas', 'qux');
