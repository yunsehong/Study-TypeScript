"use strict";
// 타입 명시
var studentId = 12345;
var studentName = 'Sehong Yoon';
var age = 27;
var gender = 'female';
var subject = 'Javascript';
var courseCompleted = false;
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
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentId: 12345,
    studentName: 'Sehong Yoon',
    gender: 'female',
    subject: 'Javascript',
    courseCompleted: false
};
function getStudentDetails(studentId) {
    return {
        studentId: 12345,
        studentName: 'Sehong Yoon',
        gender: 'female',
        subject: 'Javascript',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
    // student.studentId = 12222;
    // readonly 속성은 값을 바꿀 수 없음 
}
saveStudentDetails(student1);
// any type
var someValue = 5;
someValue = 'sehong';
// any 타입은 지양하는 것이 좋음 
// 제한된 몇 가지 타입들을 동시에 지정하고 싶을 때
// union type 사용
var price = 5;
price = 'free';
var totalCost;
var orderID;
var calculateTotalCost = function (price, qty) {
};
var findOrderID = function (customer, productId) {
    return orderID;
};
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
// 매개변수에 선택적 파라미터 적용
var sendGreeting = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    return console.log(message + ", " + userName);
};
sendGreeting(); // default "Hello, there"
sendGreeting('Good morning'); // 1st param only "Good morning, there"
sendGreeting('Good afternoon', 'Sehong'); // all param "Good afternoon, Sehong"
// Arrow function
// 기존 함수
// function add(num1, num2) {
//     return num1 + num2;
// }
// 화살표 함수
// const add = (num1, num2) => num1 + num2;
