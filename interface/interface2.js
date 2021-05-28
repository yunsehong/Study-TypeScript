"use strict";
function hello2(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
hello2({ name: 'sehong', age: 27 });
hello2({ name: 'Sehong' });
function hello3(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p31 = {
    name: 'sehong',
    age: 39
};
var p32 = {
    name: 'ddakzzi',
    nicknames: ['공주', '껌딱지'],
};
var p33 = {
    name: 'ddakzzi',
    mother: p31,
    sister: p32,
};
hello3(p33);
