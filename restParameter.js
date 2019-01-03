function iTakeItAll(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(first, second, allOthers);
}
console.log(iTakeItAll('foo', 'bar'));
console.log(iTakeItAll('foo', 'bar', 'bas', 'qux'));
