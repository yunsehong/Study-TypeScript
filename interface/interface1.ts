interface Person1 {
    name: string;
    age: number;
}

function hello1(person:Person1): void{
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
name : 'sehong',
age: 27
};

hello1(p1);

// interface는 실제로 컴파일 시 js코드에서 사라짐
// 컴파일 타임에만 필요하고 이용함
