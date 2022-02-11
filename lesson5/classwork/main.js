//1. - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// Всі функції повинні бути описані стрілочним типом!!!!
let numMin = (a,b,c) => {
        if (a < b && a < c){console.log(a)}
        else if (b < a && b < c){console.log(b)}
        else if (c < b && c < a){console.log(c)}
       }
numMin(8,10,12);


// 2.створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// Всі функції повинні бути описані стрілочним типом!!!!
let numMax = (a,b,c) => {
         if (a > b && a > c){console.log(a)}
    else if (b > a && b > c){console.log(b)}
    else if (c > b && c > a){console.log(c)}
}
numMax(10,50,100);


// 3. створити функцію яка повертає найбільше число з масиву
// Всі функції повинні бути описані стрілочним типом!!!!
let arr = [1,2,20,5,15,4,25];
let arreyMax = (a) => {
    console.log(Math.max(...a));
}
arreyMax(arr);


//4. - створити функцію яка повертає найменьше число з масиву
// Всі функції повинні бути описані стрілочним типом!!!!
let arreyMin = (a) => {
    console.log(Math.min(...a));
}
arreyMin(arr);

//5. - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// Всі функції повинні бути описані стрілочним типом!!!!

let arr2 = [1,2,10,5];
let numSum = (a) => {
    let result = 0;
    for (const check of a) {
        result = result + check;
    }
    return result;
}
console.log(numSum(arr2));

//6. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// Всі функції повинні бути описані стрілочним типом!!!!
let average = (a) => {
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum / a.length;
}
console.log(average(arr2));


//7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// Всі функції повинні бути описані стрілочним типом!!!!

let numRan = (...num) => {
    let min = num[0];
    let max = num[0];
    for (const element of num) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("Maax ", max);
    return min;
}
numRan(20, 50, 20, 15);


//8. - створити функцію яка заповнює масив рандомними числами
// Всі функції повинні бути описані стрілочним типом!!!!
let arrRando = (a) => {
    let ar = [];
    for (let i = 0; i < a; i++) {
        ar.push(Math.floor(Math.random()*20));
    }
       return ar;
};
console.log(arrRando(5));

//9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.
// Всі функції повинні бути описані стрілочним типом!!!!
let arrLimit = (a,limit) => {
    let ar = [];
    for (let i = 0; i < a; i++) {
        ar.push(Math.floor(Math.random()*(limit)));
    }
    return ar;
};
document.write(arrLimit(10,50));

//10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// Всі функції повинні бути описані стрілочним типом!!!!
let arrRev = [1,2,20,5,15,4,25];
let arrRevers = (a) => {
    let rev = [];
    for (let i = a.length - 1; i> -1; i--){
        rev.push(a[i]);
    }
    return rev;
}
console.log(arrRevers(arr));



