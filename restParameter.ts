function iTakeItAll(first: string, second: string, ...allOthers) {
    console.log(first, second, allOthers);
}

iTakeItAll('foo', 'bar')
iTakeItAll('foo', 'bar', 'bas', 'qux');