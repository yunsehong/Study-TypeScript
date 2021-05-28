
// 어떤 타입이어도 상관없는 타입
// 최대환 쓰지 않는 것이 핵심
// => 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
// 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있음
// => nolmplicitAny


function returnAny(message: any): any{
    console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();

// any는 계속해서 개체를 통해 전파됨
// 결국, 모든 편의는 타입 안전성을 잃는 대가로 온가는 것을 기억해야함
// 타입 안전성은 TypeScript를 사용하는 주요 동기 중 하나이며
// 필요하지 않은 경우에는 any를 사용하지 않도록 해야 함 

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;
// 타입적으로 에러가 나지 않음
// any가 개체를 통해 전파됨 d에 마우스 올려놓으면 계속 any타입

function leakingAny(obj: any){
    const a = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});
c.indexOf('0');

// -> c까지 다 any타입


// unknown
// any가 가지고 있는 타입의 불안정한 요소를 조금이나마 해소하고자 나온 대체자
// 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있음
// 이러한 값은 동적 콘텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있다.)
// 이 경우 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로
// unknown타입을 명시 

declare const maybe: unknown;

// type guard
// : js의 Typeof 연산자와 조건문을 사용하여 코드 검증을 수행하는 것 
// const aNumber: number = maybe;
// -> 직접적으로 unknown타입을 다른 타입으로 지정할 수 없음 
if(maybe === true){
    const aBoolean: boolean = maybe;

    // const aString: string = maybe;
    // if문 안에서 maybe는 true이기 때문에
    // boolean 타입으로 지정할 수 있지만 
    // string 타입으로는 지정 불가능 
}

if(typeof maybe === 'string'){
    const aString: string = maybe;
   // const aBoolean: boolean = maybe;
}

// any와 짝으로 any보다 Type-safe한 타입
// any와 같이 아무거나 할당할 수 있음
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없음
// unknown 타입을 사용하면 runtime error를 줄일 수 있을 것임
// 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 


import React from "react";