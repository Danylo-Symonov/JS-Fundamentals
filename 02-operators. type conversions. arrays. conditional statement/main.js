// Завдання №1
let a = 5;
let b = 6;
let c = 7;

if (a < b && b < c) {
    console.log("The statement a < b < c is true.");
}
else {
    console.warn("The statement a < b < c is not true.");
}

// Завдання №2
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = (x * 0) / (y * 0);
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// Завдання №3
const isAdult = +prompt("Are you an adult? Please enter your age.");

if (isAdult >= 18) {
    console.log('You have reached the age of majority!');
}
else {
    console.warn('You have not reached the age of majority.');
}

// Завдання №4
alert('Let\'s find out if your triangle is right-angled.');

let sideA = +prompt("Enter the value of side A:");
let sideB = +prompt("Enter the value of side B:");
let sideC = +prompt("Enter the value of side C:");

if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number' || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.warn("Incorrect data");

} else {
    let halfPerimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));

    console.log(`Area of the triangle: ${area.toFixed(3)}`);

    let isRightTriangle = false;
    if (sideA * sideA + sideB * sideB === sideC * sideC || sideA * sideA + sideC * sideC === sideB * sideB || sideB * sideB + sideC * sideC === sideA * sideA) {
        isRightTriangle = true;
    }

    if (isRightTriangle === true) {
        console.log("A triangle is a right triangle.");
    } else {
        console.warn("A triangle is not a right triangle.");
    }

}

// Завдання №5
const currentTime = new Date();
const currentHour = currentTime.getHours();

switch (true) {
    case currentHour >= 23 || currentHour < 5:
        console.log("Good night!");
        break;
    case currentHour >= 5 && currentHour < 11:
        console.log("Good morning!");
        break;
    case currentHour >= 11 && currentHour < 17:
        console.log("Good afternoon!");
        break;
    case currentHour >= 17 && currentHour < 23:
        console.log("Good evening!");
        break;
    default:
        console.log("Hi!");
}

if (currentHour >= 23 || currentHour < 5) {
    console.log("Good night!");
  } else if (currentHour >= 5 && currentHour < 11) {
    console.log("Good morning!");
  } else if (currentHour >= 11 && currentHour < 17) {
    console.log("Good afternoon!");
  } else if (currentHour >= 17 && currentHour < 23) {
    console.log("Good evening!");
  } else {
    console.log("Hi!");
  }

// Завдання №6
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// Створення об'єкта для підрахунку кількості входжень кожного числа
let numberCounts = arr.reduce((counts, num) => {
  counts[num] = (counts[num] || 0) + 1;
  return counts;
}, {});

// Знаходження числа з найбільшою кількістю входжень
let mostFrequentNumber = Object.keys(numberCounts).reduce((a, b) => numberCounts[a] > numberCounts[b] ? a : b);

// Додавання числа з найбільшою кількістю входжень до нового масиву data
let data = [mostFrequentNumber];

// Створення нового масиву arr, який не містить входжень числа mostFrequentNumber
arr = arr.filter(num => num !== mostFrequentNumber);

console.log(data); // Масив з найчастіше зустрічаючимся числом
console.log(arr);  // Змінений масив arr без найчастіше зустрічаючогося числа


