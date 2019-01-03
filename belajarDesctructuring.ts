let react = {x: 0, y: 0, width: 150, height: 200};

let x: number, y: number, width: number, height: number;
({x, y, width, height} = react);

console.log(x, y, width, height);

react.x = 10;
({x, y, width, height} = react);

console.log(x, y, width, height);