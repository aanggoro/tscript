var react = { x: 0, y: 0, width: 150, height: 200 };
var x, y, width, height;
(x = react.x, y = react.y, width = react.width, height = react.height);
console.log(x, y, width, height);
react.x = 10;
(x = react.x, y = react.y, width = react.width, height = react.height);
console.log(x, y, width, height);
