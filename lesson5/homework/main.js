// //1. створити функцію яка обчислює та повертає площу прямокутника
// Всі функції повинні бути описані стрілочним типом!!!!
let square = (a, b) => {return a * b};
console.log(square(10,5));


//2. створити функцію яка обчислює та повертає площу кола
// Всі функції повинні бути описані стрілочним типом!!!!
let squareCircle = (a) => { return Math.PI * (a**2)};
console.log(squareCircle(3));


//3. - створити функцію яка обчислює та повертає площу циліндру
// // Всі функції повинні бути описані стрілочним типом!!!!
let squareCylinder = (h,r) => {return 2 * Math.PI * h * r}
console.log(squareCylinder(10,20));


//4. створити функцію яка приймає масив та виводить кожен його елемент
//Всі функції повинні бути описані стрілочним типом!!!!
let arr = [1988,205, true , 'text'];
let arrayNew = (arr) => 
{
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrayNew(arr);


//5. Створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// Всі функції повинні бути описані стрілочним типом!!!!
let txt = (p) => {return document.write(`<p>${p}</p>`)};
txt('Стрілка');


// 6. створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// Всі функції повинні бути описані стрілочним типом!!!!
let list = (a) => {
    document.write('<ul>');
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write('</ul>');
}
list('Yes');


//7.  створити функцію яка  створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// Всі функції повинні бути описані стрілочним типом!!!!
let lister = (a,b) => {
    document.write('<ul>');
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write('</ul>');
}
lister('Best',8);


//8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// Всі функції повинні бути описані стрілочним типом!!!!
let arr2 = [1988,205, false , 'text2'];
let listCreat = (a) => {
    document.write('<ul>');
    for (const item of a) {
        document.write(`<li>${item}</li>`);
    }
}
listCreat(arr2);


//9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// Всі функції повинні бути описані стрілочним типом!!!!
let arrUser=[{id: 'Dodik', name: 'Vasja', age: 15}];
let arrCreat = (ar1) => {
    for (const aElement of ar1) {
        document.write(`<div>${aElement.id}<hr></div>`);
        document.write(`<div>${aElement.name}<hr></div>`);
        document.write(`<div>${aElement.age}<hr></div>`);
    }
}
arrCreat(arrUser);

