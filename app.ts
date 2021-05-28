// 타입 명시
let studentId:number = 12345;
let studentName:string = 'Sehong Yoon';
let age:number = 27;
let gender:string = 'female';
let subject:string = 'Javascript';
let courseCompleted:boolean = false;

// function getStudentDetails(studentId:number): {  
//     studentId:number;
//     studentName:string;
//     age:number;
//     gender:string;
//     subject:string;
//     createDate:Date;
// }{
//     return null;
// }

// Enum & literal type
// 열거형 Enum : 연관된 아이템들을 함께 묶어서 표현할 수 있는 수단
enum GenderType {
    Male = 'male',
    Female = 'female',
    genderNeutral = 'genderNeutral'
}

let student1: Student = {
    studentId: 12345,
    studentName: 'Sehong Yoon',
    gender: 'female',
    subject: 'Javascript',
    courseCompleted: false
}


// 보다 간편하게 인터페이스 사용하기
// interface는 타입스크립트에서만 존재 js로 컴파일시 코드가 보이지 않음 
interface Student{
    readonly studentId:number,
    studentName:string,
    age?:number,    // optional property
    // gender:GenderType.female,                 // enum 
    gender:'male' | 'female' | 'genderNeutral',  // literal type
    subject:string,
    courseCompleted:boolean,

    // 인터페이스 내에서 메소드 정의(2가지)
    // addComment(comment: string) : string;
    addComment?:(comment: string) => string


}

function getStudentDetails(studentId:number): Student
{
    return {
        studentId: 12345,
        studentName: 'Sehong Yoon',
        gender: 'female',
        subject: 'Javascript',
        courseCompleted: true
    };
} 

function saveStudentDetails(student: Student): void{
   // student.studentId = 12222;
   // readonly 속성은 값을 바꿀 수 없음 
}

saveStudentDetails(student1);


// any type
let someValue: any = 5;
someValue = 'sehong';
// any 타입은 지양하는 것이 좋음 

// 제한된 몇 가지 타입들을 동시에 지정하고 싶을 때
// union type 사용
let price: number | string = 5;
price = 'free';
// price = true; -> error any type과의 차이점 

// 타입 명시를 계속 반복하는 것 보다 TypeAliases 사용
// type 키워드를 사용해 새로운 타입을 선언해 주는 것 
type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price: StrOrNum, qty: number)
:void => {

};

const findOrderID = (customer: { customerId: StrOrNum, name: string},
                     productId: StrOrNum) : StrOrNum => {
                        return orderID;
                     }

// type guard
// : js의 Typeof 연산자와 조건문을 사용하여 코드 검증을 수행하는 것 
type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum):void => {
    if(typeof price === 'string'){
        itemPrice = 0;
    } else {
        itemPrice = price;
    }
};

setItemPrice(50);

// 매개변수에 선택적 파라미터 적용
const sendGreeting = (message = 'Hello', userName = 'there'): 
void => console.log(`${message}, ${userName}`);


sendGreeting();  // default "Hello, there"
sendGreeting('Good morning');   // 1st param only "Good morning, there"
sendGreeting('Good afternoon', 'Sehong');   // all param "Good afternoon, Sehong"


// Arrow function

// 기존 함수
// function add(num1, num2) {
//     return num1 + num2;
// }

// 화살표 함수
// const add = (num1, num2) => num1 + num2;






