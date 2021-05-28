"use strict";
// function in interface
var p41 = {
    name: 'sehong',
    age: 25,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + "\uC785\uB2C8\uB2E4.");
    }
};
var p42 = {
    name: 'sehong',
    age: 27,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + "\uC785\uB2C8\uB2E4.");
    }
};
var p43 = {
    name: 'sehong',
    age: 27,
    hello: function () {
        // console.log(`안녕하세요! ${this.name}입니다.`);
        // arrow function의 경우 this 사용 불가능 
    }
};
p41.hello();
p42.hello();
function hello() {
}
