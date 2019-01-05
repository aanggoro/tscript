var Component = /** @class */ (function () {
    function Component(name) {
        this.name = name;
    }
    return Component;
}());
var Frame = /** @class */ (function () {
    function Frame(name, components) {
        this.name = name;
        this.components = components;
    }
    Frame.prototype[Symbol.iterator] = function () {
        var pointer = 0;
        var components = this.components;
        return {
            next: function () {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    };
    return Frame;
}());
var frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
for (var _i = 0, frame_1 = frame; _i < frame_1.length; _i++) {
    var cmp = frame_1[_i];
    console.log(cmp);
}
