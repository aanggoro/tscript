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
var Point = /** @class */ (function () {
    function Point(firstDigit, secondDigit) {
        this.firstDigit = firstDigit;
        this.secondDigit = secondDigit;
    }
    Point.prototype.add = function (point) {
        return new Point(this.firstDigit + point.firstDigit, this.secondDigit + point.secondDigit);
    };
    return Point;
}());
var point1 = new Point(0, 10);
var point2 = new Point(10, 20);
var point3 = point1.add(point2);
console.log(point3);
var Point3d = /** @class */ (function (_super) {
    __extends(Point3d, _super);
    function Point3d(firstDigit, secondDigit, thirdDigit) {
        var _this = _super.call(this, firstDigit, secondDigit) || this;
        _this.thirdDigit = thirdDigit;
        return _this;
    }
    Point3d.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, point);
        return new Point3d(point2D.firstDigit, point2D.secondDigit, this.thirdDigit + point.thirdDigit);
    };
    return Point3d;
}(Point));