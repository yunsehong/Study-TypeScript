"use strict";
function hello1(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p1 = {
    name: 'sehong',
    age: 27
};
hello1(p1);
// interface는 실제로 컴파일 시 js코드에서 사라짐
// 컴파일 타임에만 필요하고 이용함
