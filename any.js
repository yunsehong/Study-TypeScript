"use strict";
// 어떤 타입이어도 상관없는 타입
// 최대환 쓰지 않는 것이 핵심
// => 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
// 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있음
// => nolmplicitAny
Object.defineProperty(exports, "__esModule", { value: true });
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny('리턴은 아무거나');
any1.toString();
// any는 계속해서 개체를 통해 전파됨
// 결국, 모든 편의는 타입 안전성을 잃는 대가로 온가는 것을 기억해야함
// 타입 안전성은 TypeScript를 사용하는 주요 동기 중 하나이며
// 필요하지 않은 경우에는 any를 사용하지 않도록 해야 함 
var looselyTyped = {};
var d = looselyTyped.a.b.c.d;
// 타입적으로 에러가 나지 않음
// any가 개체를 통해 전파됨 d에 마우스 올려놓으면 계속 any타입
function leakingAny(obj) {
    var a = obj.num;
    var b = a + 1;
    return b;
}
var c = leakingAny({ num: 0 });
c.indexOf('0');
// type guard
// : js의 Typeof 연산자와 조건문을 사용하여 코드 검증을 수행하는 것 
// const aNumber: number = maybe;
// -> 직접적으로 unknown타입을 다른 타입으로 지정할 수 없음 
if (maybe === true) {
    var aBoolean = maybe;
    // const aString: string = maybe;
    // if문 안에서 maybe는 true이기 때문에
    // boolean 타입으로 지정할 수 있지만 
    // string 타입으로는 지정 불가능 
}
if (typeof maybe === 'string') {
    var aString = maybe;
    // const aBoolean: boolean = maybe;
}
