var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function (i, j) {
        console.log("from test(number, string)");
    };
    return A;
}());
var a1 = new A();
a1.test();
console.log("-------------------");
a1.test(1000);
console.log("-------------------");
a1.test(10, "abc");
