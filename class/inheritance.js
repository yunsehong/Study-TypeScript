// 상속
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const p = new Parent('sehong', 27);
// p.print();
class Child extends Parent {
    constructor(age) {
        super('딱지', age);
        this.gender = 'female';
        this.printName();
    }
}
const child1 = new Child(2);
child1.print();
