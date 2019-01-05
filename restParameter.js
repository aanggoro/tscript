// "..." symbol to allow you to quickly accept multiple arguments in your function and get them as an array
function iTakeItAll(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(first, second, allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'bas', 'qux');
