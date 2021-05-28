class Person {
  name: string;

  constructor(name: string){
      this.name = name;
  }
}

const p1 = new Person('Sehong');

console.log(p1);

// class 키워드를 이용하여 클래스 만듦
// new 를 이용하여 class를 통해 object를 만들 수 있음
// constructor를 이용하여 object를 생성하면서 값 전달
// this를 이용해서 만들어진 object를 가리킴

// strict 모드에서는 필드를 선언하는 곳 또는 생성자에서 값을 할당해야 함 
// constructor를 이용하지 않고 클래스 생성 시
// 직접 값을 애초에 할당 해주거나
// 의도적으로 추후에 값을 할당하겠다 란 뜻의 필드 뒤에 !를 붙여야 함(위험을 표현)
class Person2 {
    name: string = 'sehong';
    age!: number;

    constructor(age:number) {
        this.age = age;
    }
}

// constructor없이 클래스 생성해도 new를 통해 class 호출 가능
// 새로운 값을 할당하며 호출할 수 없음 기본 값만 호출 가능(name)
const p2 = new Person2(27);
// age는 constructor으로 생성했으므로 적당한 값을 넣으며 생성 가능 
console.log(p2);
// !붙인 필드에는 반드시 값을 할당 해주어야함
// 안해주면 런타임 에러남 undefined
p2.age = 27; 
console.log(p2.age);





// * 기본 생성자 클래스와 매개변수 클래스 둘 다 호출하고 싶을 때 *
class Person3 {
    name: string = 'ddakzzi';
    age: number;

    constructor(age?: number){
        if(age === undefined){
            this.age = 2;  // 기본 생성자 호출 시 기본값 20으로 셋팅
        } else {
            this.age = age;
        }
    }
}

const p3 = new Person3();
const p32 = new Person3(3);
// 매개변수 있/없 둘 다 호출해도 에러 안남 

console.log(p3);
console.log(p32);

// constructor에는 async를 붙일 수 없음 





// * 접근제어자 *
// public, private, protected
// 기본값 public
// 클래스 내부 모든 곳에 설정 가능(생성자, 프로퍼티, 메소드)
// private로 설정 시 클래스 외부에서 접근 불가능





// * 생성자에 파라미터를 받아서 바로 클래스의 프로퍼티로 초기화 하는 방법 *
class Person4 {
    public constructor(public name:string, private age: number){}
}
// -> 생성자로 받는 파라미터에 접근제어자를 쓰면
// 자동으로 this.name = name;
// this.age = age; 로 설정됨 

const p4 = new Person4("딱지", 2);
console.log(p4);
console.log(p4.name);
// console.log(p4.age);
// -> private으로 선언한 age 접근 불가능 





// * Getter & Setter *
// console.log(p4.name); // get 을 하는 함수 getter
// p4.name = '코딱지';    // set 을 하는 함수 setter 
class Person5 {
    public constructor(private _name:string, private age?: number){}

    get name() {
        console.log("get");
        return this._name;
    }

    set name(n:string){
        console.log("set");
        this._name = n;
    }

}
const p5 = new Person5('왕코딱지');
console.log(p5.name);   // get 함수 호출 
p5.name = 'set코딱지';    // set 함수 실행 
console.log(p5.name);   // get 함수 호출 





// * readonly properties *
class Person6 {
    public readonly name: string = 'sehong';
    private readonly country: string = 'Korea';
    public constructor(private _name:string, private age?: number){}

    hello(){
        this.country;   // 문제 없음
       //  this.country = 'China';   불가능 
    }

}

const p6 = new Person6('왕코딱지');
console.log(p6.name);   
// p6.name = '세홍';
// 재할당 불가능    

// readonly가 적용된 프로퍼티는
// 접근제어자 상관 없이 선언하는 곳에서 할당해주는 값 아니면
// 클래스 내/외 모두 재할당 불가능





// * Index Signatues in class *
// class => object
// a반 -> {mark: 'male', jade: 'male'}
// b반 -> {chole: 'female', alex: 'male', anna: 'female'}

class Students {
  [index: string] : 'male' | 'female';
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chole = "female";
b.alex = "male";
b.anna = "female";

console.log(b);
// 동적으로 프로퍼티의 이름이 들어오는 경우 사용 





// * Static Properties & Methods
class Person7 {
    public static CITY = 'Seoul';
    public static hello(){
        console.log("안녕하쉐요ㅎ", Person7.CITY);
    }
}

const p7 = new Person7();
// p7.hello(); 호출 불가 
Person7.hello();
// static을 사용할 경우 클래스에서 바로 함수 호출 가능
Person7.CITY;

 



