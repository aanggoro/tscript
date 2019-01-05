//multiple value assign to one variable
var react = { x: 0, y: 0, width: 150, height: 200 };
//typescript declare data type
var x, y, width, height;
//destructuring variable react
(x = react.x, y = react.y, width = react.width, height = react.height);
//print result destructuring
console.log(x, y, width, height);
//override variable x
react.x = 10;
(x = react.x, y = react.y, width = react.width, height = react.height);
//print result destructuring
console.log(x, y, width, height);
