//multiple value assign to one variable
let react = {x: 0, y: 0, width: 150, height: 200};

//typescript declare data type
let x: number, y: number, width: number, height: number;
//destructuring variable react
({x, y, width, height} = react);

//print result destructuring
console.log(x, y, width, height);

//override variable x
react.x = 10;
({x, y, width, height} = react);

//print result destructuring
console.log(x, y, width, height);