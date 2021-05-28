"use strict";
function error(message) {
    throw new Error(message);
}
// never는 리턴 타입으로 사용됨
// 아무것도 리턴되지 않음을 뜻함
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
// never 타입은 모든 타입의 서브타입이며, 모든 타입에 할당 할 수 있음
// 하지만 never에는 그 어떤 것도 할당할 수 없음
// any 조차도 never에게 할당할 수 없음
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함
var a = 'hello';
if (typeof a !== 'string') {
    a;
    // 마우스 올리면 a는 never
    // string에서 string을 빼면 아무것도 할당할 수 없는 상태이기 때문
}
if (typeof a2 !== 'string') {
    a2;
    // 마우스 올리면 a는 number
    // string | number 에서 string을 빼면 number타입 
}
// 특정 오브젝트 타입을 하나 넣으면 
// string타입이 아니면 never가 될 것임
// const b: Indexable<{}> = '';
// never에 뭐하려 함? 에러남 
