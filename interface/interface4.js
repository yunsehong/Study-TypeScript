"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB3D9~");
    };
    return Person;
}());
// class 또한 type처럼 사용 가능
var person = new Person('떼홍');
var person2 = new Person('데세홍');
person.hello();
person2.hello();
