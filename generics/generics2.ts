// * Generics Array & Tuple *
function helloArray<T>(message:T[]): T{
    return message[0];
}
// -> message의 배열을 받아서 0번째 인자 리턴하겠다

helloArray(["Hello", "World"]); // <string>
helloArray(["Hello",5]);    // <string | number>

function helloTuple<T, K>(message:[T, K]): T{
    return message[0];
}
helloTuple(["Hello", "World"]); // <string | string>
helloTuple(["Hello", 5]);       // <string | number>





// * Generics Function *
// 1. type alias
type HelloFunctionGeneric1 = <T>(message: T) => T;
// T를 받아서 T를 리턴하는 type alias

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
    return message;
};
// 2. interface
interface HelloFunctionGeneric2 {
    <T>(message:T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
    return message;
}





// * Generics Class *
class Person<T, K>{
    private _name: T;
    private _age: K;

    constructor(name: T, age: K){
        this._name = name;
        this._age = age;
    }
}

new Person("Sehong",27);
// new Person<string>(20);
new Person<string, number>("sehong",20);





// * Generics with extends *
class PersonExtends<T extends string | number> {
    // T는 string 또는 number만 가능하다는 제약을 거는 것 
    private _name: T;

    constructor(name: T){
        this._name = name;
    }
}

new PersonExtends("Sehong");
new PersonExtends(20);
// new PersonExtends(true);




// * keyof & type lookup system *
interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: "sehong",
    age:20
};

type Keys = keyof IPerson;
// 객체에 keyof를 붙이면 그 결과물이 타입으로 나옴
const keys: Keys = "age";

// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
}

getProp(person, 'name');
getProp(person, 'age');
// 넣은 key값에 따라 함수의 return 타입이 string 혹은 age로 맞게 변경됨을 알 수 있음

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void{
    obj[key] = value;
}

setProp(person, "name", "sehong"); 

// 결과적으로 런타임 에러발생 방지하고 안전한 코드 작성 가능 


   
