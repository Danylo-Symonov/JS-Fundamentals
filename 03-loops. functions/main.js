// // Завдання №1
// function createArray(start, end) {
//     if (start > end) {
//         return [];
//     }

//     let array = [];

//     for (let i = start; i <= end; ++i) {
//         array.push(i);
//     }

//     return array;
// }

// let arr = createArray(2, 9);
// console.log(arr);

// // Завдання №2
// function generateSequence(a, b) {
//     let sequence = [];

//     for (let currentNumber = a; currentNumber <= b; ++currentNumber) {
//         for (let i = 1; i <= currentNumber; ++i) {
//             sequence.push(currentNumber);
//         }
//     }

//     return sequence;
// }

// let result = generateSequence(1, 5);
// console.log(result);

// // Завдання №3
// function randArray(k) {
//     let arr = [];
//     for (let i = 1; i <= k; ++i) {
//         let randomNumber = Math.floor(Math.random() * 500) + 1;
//         arr.push(randomNumber);
//     }

//     return arr;
// }

// let result = randArray(5);
// console.log(result);

// // Завдання №4
// function compact(array) {
//     let result = [];
//     for (let i = 0; i < array.length; ++i) {
//         if (!result.includes(array[i])) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// const arr = [5, 3, 4, 5, 6, 7, 3];
// const arrUnique = compact(arr);
// console.log(arrUnique);

// // Завдання №5
// function funcName(arr) {
//   let numbers = [];
//   let strings = [];

//   arr.forEach(element => {
//     if (typeof element === "number") {
//       numbers.push(element);
//     } else if (typeof element === "string") {
//       strings.push(element);
//     } else if (Array.isArray(element)) {
//       element.forEach(innerElement => {
//         if (typeof innerElement === "number") {
//           numbers.push(innerElement);
//         } else if (typeof innerElement === "string") {
//           strings.push(innerElement);
//         }
//       });
//     }
//   });

//   return [numbers, strings];
// }

// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// let arrNew = funcName(arr);

// console.log(arrNew);

// // Завдання №6
// function calc(a, b, op) {
//   if (op === 1) {
//     return a - b;
//   } else if (op === 2) {
//     return a * b;
//   } else if (op === 3) {
//     if (b !==0) {
//       return a / b
//     } else {
//       return "Помилка: ділення на нуль";
//     }
//   } else {
//     return a + b;
//   }
// }

// console.log(calc(10, 3, 1));

// Завдання №7
// function findUnique(arr) {
//   const elementCount = {};

//   arr.forEach(function (element) {
//     if (elementCount[element]) {
//       elementCount[element]++;
//     } else {
//       elementCount[element] = 1;
//     }
//   });

//   for (const key in elementCount) {
//     if (elementCount[key] > 1) {
//       return false;
//     }
//   }

//   return true;

// }

// console.log(findUnique([1, 2, 3, 5, 3]));  // => false
// console.log(findUnique([1, 2, 3, 5, 11])); // => true

//альтернативне вирішення

function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true