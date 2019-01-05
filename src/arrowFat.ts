class Adder {
    //constructor public get first parameter
    constructor(public a: number){}

    //arrow function with parameter number will returning number value
    add = (b: number): number => {
        return this.a + b;
    }
}

class Child extends Adder {
    callAdd(b: number){
        return this.add(b);
    }
}

//call child in the parent class to assignment value 123
const child = new Child(123);

//print result adding class Child
console.log(child.callAdd(123));