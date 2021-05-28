// class implements interface
interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string){
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니동~`);
    }
}

// class 또한 type처럼 사용 가능
const person = new Person('떼홍');
const person2: IPerson1 = new Person('데세홍');

person.hello();
person2.hello();