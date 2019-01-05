var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Adder = /** @class */ (function () {
    //constructor public get first parameter
    function Adder(a) {
        var _this = this;
        this.a = a;
        //arrow function with parameter number will returning number value
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.callAdd = function (b) {
        return this.add(b);
    };
    return Child;
}(Adder));
//call child in the parent class to assignment value 123
var child = new Child(123);
//print result adding class Child
console.log(child.callAdd(123));
