// interface extends interface
interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2{
    city: string;
}

const k: IKorean = {
    name: "윤세홍",
    city: "서울"
};

HTMLDivElement


// function interface
// HelloPerson이라는 인터페이스를 사용하는 객체는
// name과 age를 옵션으로 받음 
interface HelloPerson {
    (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string, age?: number) {
    console.log(`안녕하세요 ${name} 입니다.`);
}
 
helloPerson('윤세홍');


// Readonly interface Properties
interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: '윤세홍',
    gender:'female',
}

// p81.gender = 'male';
// readonly 속성은 값을 재할당 할 수 없음 


// type alias VS interface

// 1. function
// 1) type alias
type EatType = (food: string) => void;

// 2) interface
interface IEat {
    (food: string): void;
}

// 2. array
// 1) type alias
type PersonList = string[];

// 2) interface
interface IPersonList {
    [index: number]: string;
}
// interface같은 경우 인덱서블 타입 이용
// [index: number]를 넣게 되면 스트링 값을 넣는 배열로 보게 됨


// 3. intersection(교차)
interface ErrorHandling {
    success: boolean;
    error? : {message: string};
}

interface ArtistsData {
    artists: {name: string}[];
}

// 두 개의 인터페이스를 가지는 type alias와 interface를 표현하는 2가지 방법
// 1) type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// 2) interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;


// 4. union types
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

type PetType = Bird | Fish; // type alias로 표현 
// Bird 이거나 Fish일 수 있는 타입을 묶어 PetType으로 타입 정의

// interface IPet extends PetType {} 
// error -> 유니온타입은 하나의 인터페이스에 상속해줄 수 없음
// class Pet implements PetTyle {}
// error -> 유니온타입은 하나의 클래스에 상속해줄 수 없음 


// Declaration Merging - only interface
interface MergingInterface {
    a: string;
}

interface MergingInterface {
    b: string;
}

let mi: MergingInterface;
// mi.
// mi에 .을 찍어 뭐 하려고 하면 a도 나오고 b도 나옴
// interface가 mergy되었기 때문

// type alias는 불가능 중복 이름으로 타입 정의 불가능

// type alias는 기존에 있는 타입을 부르는 이름을 정하는 것
// interface는 새로운 어떤 타입을 만들어내는 것 
