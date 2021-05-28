// create by object literal
const person1 = {name: 'sehong', age: 27};

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({name: 'sehong', age: 27});

// "primitive type이 아닌 것" 을 나타내고 싶을 때 사용하는 타입

let obj2: object = {};

obj2 = {name: 'sehong'};

obj2 = [{name: 'sehong'}];

// Error example
// obj2 = 27; 
// obj2 = 'sehong'; 
// obj2 = true; 
// obj2 = null; 
// obj2 = undefined; 
// obj2 = Symbol();
// => 이런것들을 넣을 수 없도록 object type을 씀

// Object.create
// Object.create(0); ->  Error


// Array

// 원래 js에서 array는 객체임
let list: (number | string)[] = [1, 2, 3, "4"];
// number or string인 배열 타입 
// let list: Array<number> = [1, 2, 3]; 
// -> 사용 자제


// Tuple
let x: [string, number];

x = ["hello", 27];
// x = [27,"hello"];
// 순서와 타입이 맞아야 함 

// x[3] = "world";
// 배열 길이도 맞아야 함 

const person: [string, number] = ["sehong", 27];

const [first, second] = person;
// person에 있는 요소를 가지고 나와서 분해 할당 







