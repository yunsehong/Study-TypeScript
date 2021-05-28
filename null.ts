// let myName: string = null;
// -> config.json 파일에  "strict": true 때문에 기본 타입형에 null 또는 undefined를 할당할 수 없다

// let u: undefined = null; -> X
let v: void = undefined; // -> O

// Typescript 에서 undefined와 null은 실제로 각각 undefined 및 null 이라는 타입을 가짐
// void와 마찬가지로, 그 자체로는 그다지 유용하지 않음
// 둘 다 소문자만 존재
// tsconfig.json 설정을 하지 않으면 다른 모든 타입에 서브타입으로 존재함
// number에 null or undefined를 할당할 수 있다는 의미
// 하지만 컴파일 옵션에서 `--strictNullCheck`를 사용하면, null과 undefined는 void 나 자기 자신들에게만 할당할 수 있음
// -> number에 null을 입력하면 에러가 남
// number에 null이나 undefined가 없도록 처리하는것이 안전하고 정확하기 때문에 
// 보통 strickNullCheck 옵션을 켜고 사용함
// number에 null이나 undefined를 할당할 수 있게 하려면 union type을 이용


let union: string | null = null;
// -> union type string과 null 타입을 동시에 정의

union = "Sehong";

