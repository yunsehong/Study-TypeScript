// 상속
class Parent {
    constructor(protected _name:string, private _age: number){}
    public print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }

    protected printName(): void{
        console.log(this._name, this._age);
    }
}

// const p = new Parent('sehong', 27);
// p.print();

class Child extends Parent{
  
    public gender = 'female';

    constructor(age: number){
        super('딱지',age); 

        this.printName();
    }
}

const child1 = new Child(2);
child1.print();