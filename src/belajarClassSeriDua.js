"use strict";
//parent class
class Point {
    //constructor get firstDigit and secondDigit
    constructor(firstDigit, secondDigit) {
        this.firstDigit = firstDigit;
        this.secondDigit = secondDigit;
    }
    //method add
    add(point) {
        return new Point(this.firstDigit + point.firstDigit, this.secondDigit + point.secondDigit);
    }
}
//assign test class
let point1 = new Point(0, 10);
let point2 = new Point(10, 20);
let point3 = point1.add(point2);
//print point3
console.log(point3);
//Point3d inherit Point Class
class Point3d extends Point {
    //constructor add third parameter
    constructor(firstDigit, secondDigit, thirdDigit) {
        super(firstDigit, secondDigit);
        this.thirdDigit = thirdDigit;
    }
    //method add third point
    add(point) {
        let point2D = super.add(point);
        return new Point3d(point2D.firstDigit, point2D.secondDigit, this.thirdDigit + point.thirdDigit);
    }
}
