"use strict";
// * Generics Array & Tuple *
function helloArray(message) {
    return message[0];
}
// -> message의 배열을 받아서 0번째 인자 리턴하겠다
helloArray(["Hello", "World"]); // <string>
helloArray(["Hello", 5]); // <string | number>
function helloTuple(message) {
    return message[0];
}
helloTuple(["Hello", "World"]); // <string | string>
helloTuple(["Hello", 5]); // <string | number>
// T를 받아서 T를 리턴하는 type alias
var helloFunction1 = function (message) {
    return message;
};
var helloFunction2 = function (message) {
    return message;
};
// * Generics Class *
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    return Person;
}());
new Person("Sehong", 27);
// new Person<string>(20);
new Person("sehong", 20);
// * Generics with extends *
var PersonExtends = /** @class */ (function () {
    function PersonExtends(name) {
        this._name = name;
    }
    return PersonExtends;
}());
new PersonExtends("Sehong");
new PersonExtends(20);
var person = {
    name: "sehong",
    age: 20
};
// 객체에 keyof를 붙이면 그 결과물이 타입으로 나옴
var keys = "age";
// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'name');
getProp(person, 'age');
// 넣은 key값에 따라 함수의 return 타입이 string 혹은 age로 맞게 변경됨을 알 수 있음
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "name", "sehong");
// 결과적으로 런타임 에러발생 방지하고 안전한 코드 작성 가능 
