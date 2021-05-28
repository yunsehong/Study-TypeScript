// function in interface

interface Person4 {
    name: string,
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'sehong',
    age: 25,
    hello: function(): void{
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
};

const p42: Person4 = {
    name: 'sehong',
    age: 27,
    hello(): void{      // function 생략 가능 
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
};

const p43: Person4 = {
    name: 'sehong',
    age: 27,
    hello: (): void =>{
        // console.log(`안녕하세요! ${this.name}입니다.`);
        // arrow function의 경우 this 사용 불가능 
    }
};

p41.hello();
p42.hello();



function hello() : void{

}