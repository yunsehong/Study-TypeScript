"use strict";
// Symbol 
// Symbol을 함수로 사용하여 symbol 타입을 만들 수 있음 
// new Symbol() 로 사용 불가능 
// symbol은 불변하고 유일함 
var _a;
console.log(Symbol('foo') === Symbol('foo'));
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]); // "value"
obj[sym];
