function helloString(message: string): string{
    return message;
}

function helloNumber(message: number): number{
    return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any{
    return message;
}

console.log(hello('sehong').length);
console.log(hello(100));
// any타입은 인풋에 따라 달라지는 쓸 수 있는 메소드를 구별하여 쓸 수 없음


function helloGeneric<T>(message: T): T{
    return message;
}

console.log(helloGeneric('s2hong').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));

 function helloBasic<T, U>(message: T, comment: U): T{
     return message;
 }

 helloBasic<string, number>('데세홍',20);
 // 직접 지정할 때는 직접 지정한 타입으로 추론 됨
 helloBasic(90, 39);   
 // 지정해주지 않으면 90,39 자체가 타입이 됨 number로 추론하지 않음 

