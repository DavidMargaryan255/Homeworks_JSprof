//1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

// function sepNumbers(arr) {
//    let arrOdd = [];
//    let arrEven = [];
//    for(let i = 0;i < arr.length;i++) {
//        if(arr[i] % 2 === 1) {
//             arrOdd.push(arr[i]);
//        } else {
//             arrEven.push(arr[i]);
//        }
//    }
//    console.log(arrEven);
//    console.log(arrOdd);
// }
// let inputArr1 = [45, 12, 3, 6, 17, 0];
// let inputArr2 = [1, 3, 5, 9];

// sepNumbers(inputArr1);
// sepNumbers(inputArr2);

//2. Write a function that calculates sum, difference, multiplication and division between given array 
// elements depending on passed operation symbol. Write appropriate function for each operation.

// function res(symboll,arr) {
//    let result;
//    if(symboll === "+") {
//        result = sum(arr);
//    } else if(symboll === "-") {
//        result = dif(arr);
//    } else if(symboll === "*") {
//        result = mult(arr);
//    } else if(symboll === "/") {
//        result = div(arr);
//    }
//    return result;
// }

// function sum(arr) {
//    let sum = 0;
//    for(let i = 0;i < arr.length;i++) {
//        sum += arr[i];
//    }
//    return sum;
// }

// function div(arr) {
//    let result = arr[0];
//    for(let i = 1;i < arr.length;i++) {
//        result /= arr[i];
//    }
//    return result;
// }

// function mult(arr) {
//    let result = 1;
//    for(let i = 0;i < arr.length;i++) {
//        result *= arr[i];
//    }
//    return result;
// }

// function dif(arr) {
//    let difference = arr[0];
//    for(let i = 1;i < arr.length;i++) {
//        difference -= arr[i];
//    }
//    return difference;
// }

// const inputedArr = [2,7,9,12,9];

// console.log(res("+",inputedArr));
// console.log(res("-",inputedArr));
// console.log(res("*",inputedArr));
// console.log(res("/",inputedArr));

//3.Write a function which receives two strings and removes appearances of the second string from the first one.

// function remover(str1,str2) {
//    let newString = "";
//    let equalCount = 0;
//    let indexForStr2 = 0;
//    let checkingString = "";
//    if(str2.length !== 1) {
//       for(let i = 0;i < str1.length;i++) {
//            if(str1[i] == str2[indexForStr2]) {
//                 equalCount++;
//                 indexForStr2++;
//                 checkingString += str1[i];
//            } else if(equalCount != str2.length && equalCount != 0) {
//                 equalCount = 0;
//                 indexForStr2 = 0;
//                 newString += checkingString;
//                 checkingString = "";
//            } else {
//                 equalCount = 0;
//                 indexForStr2 = 0;
//                 newString += str1[i];
//            }
//       }
//    } else {
//        for(let k = 0;k < str1.length;k++) {
//            if(str1[k] !== str2) {
//                newString += str1[k];
//            }
//        }    
//    }
//    return newString;
// }

// let inputedString1 = "This is some text.";
// let inputedString2 = "is";

// let inputedString3 = "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather";
// let inputedString4 = "o";

// const result1 = remover(inputedString1,inputedString2);
// const result2 = remover(inputedString3,inputedString4);
// console.log(result1);
// console.log(result2);

//5.Given two objects. Write a function that performs shallow compare.


function compare(obj1,obj2) {
    let obj1Count = 0;
    let obj2ItemCount = 0;
    for (let key1 in obj1) {
        obj1Count++;
    }
    for(let key2 in obj2) {
        obj2ItemCount++;
    }
    if(obj1Count !== obj2ItemCount) {
        return false;
    }
    for(let key1 in obj1) {
        if(obj2.hasOwnProperty(key1)) {
            if(obj1[key1] !== obj2[key1]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}
let inputedObj1 = {};
let inputedObj2 = {};

console.log(compare(inputedObj1,inputedObj2));
