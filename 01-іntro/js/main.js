// Завдання №2
console.log("Symonov");

// Завдання №3
let number = 14;
let greeting = "Hello!";
console.log(number);
console.log(greeting);
greeting = number;
console.log(number);
console.log(greeting);

// Завдання №4
let userInformation = {
    name: "Till",
    age: 18,
    isRaedy: false,
    unknownVariable: undefined,
    married: null,
};

// Завдання №5
const isAdult = confirm(`Are you an adult?`);

// Завдання №6
const myFirstName = "Danylo";
const myLastName = "Symonov";
const myStudyGroup = 906;
const myYearOfBirth = 1989;
let isMarried = true;

console.log(`Study group: ${myStudyGroup}, type: ${typeof (myStudyGroup)}`);
console.log(`Year of birth: ${myYearOfBirth}, type: ${typeof (myYearOfBirth)}`);
console.log(`Married: ${isMarried}, type: ${typeof (isMarried)}`);
console.log(`Name: ${myFirstName}, type: ${typeof (myFirstName)}`);
console.log(`Surname: ${myLastName}, type: ${typeof (myLastName)}`);

let nullData = null;
let undefinedVeriable = undefined;

console.log(`Null data: ${nullData}, type: ${typeof (nullData)}`);
console.log(`Undefined veriabel: ${undefinedVeriable}, type: ${typeof (undefinedVeriable)}`);

// Завдання №7
let login = prompt('Enter your login.');
let email = prompt('Enter your email.');
let password = prompt('Enter you password.');
let message = `Dear ${login}, your email: ${email} and password: ${password}.`;
alert(message);

// Завдання №8
const secondsInAMinute = 60;
const minuteInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minuteInAnHour;
const hoursInADay = 24;
const secondsInADay = secondsInAnHour * hoursInADay;
const daysInAMonth = 31;
const secondsInAMonth = secondsInADay * daysInAMonth;

console.log(`Seconds in an hour: ${secondsInAnHour}`);
console.log(`Seconds in a day: ${secondsInADay}`);
console.log(`Seconds in a month: ${secondsInAMonth}`);