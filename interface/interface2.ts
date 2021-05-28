// Optional property(1)
// use ?
interface Person2 {
    name: string;
    age?: number;
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name: 'sehong', age: 27});
hello2({name: 'Sehong'});


// Optional property(2)
// indexable type
interface Person3 {
    name: string;
    age?: number;   // 이름이 명시되어 있고 있는지 없는지 
    [index: string]: any;   
    // 어떤 이름의 프로퍼티가 와도 괜찮을 때 
    // 어떤 프로퍼티든지 추가로 설정할 수 있는 형태로 코딩해야할 때 
}

function hello3(person: Person3): void{
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
    name: 'sehong',
    age: 39
};

const p32: Person3 = {
    name: 'ddakzzi',
    nicknames:['공주', '껌딱지'],
};

const p33: Person3 = {
    name: 'ddakzzi',
    mother: p31,
    sister: p32,
}

hello3(p33);

