//1. - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    let result = a * b;
    return result;
}
console.log(square(5,2));

//2. створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(a) {
   let result = Math.PI * (a**2);
   return result;
}
console.log(squareCircle(5));

//3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(h,r) {
    let height = h;
    let radius = r;
    let result = 2 * Math.PI * r * h;
    return result;
}
console.log(squareCylinder(5,5));

//4. створити функцію яка приймає масив та виводить кожен його елемент
function arrayNew(a, b, c, d) {
    let arr = [a, b, c, d,];
    return arr;
}
console.log(arrayNew('jhgj', 1987, true, 7654));


//5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
function txt(p) {
    let text = `<p>${p}</p>`;
    return text;
}
document.write(txt('Круто'));
console.log(txt('Круто'));


//6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(a){
        document.write('<ul>');
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
        document.write('</ul>');
        return a;
}
console.log(list('Клас'));

//7. створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function lister(a,b){
    document.write('<ul>');
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`);
    }
     document.write('</ul>');
    }
lister('Лістер',5);

//8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listCreat(a, b, c, d) {
    let arr = [a, b, c, d,];
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }

}
listCreat('jhgj',777,true,false);

//9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrUser=[{id: 'Dodik', name: 'Vasja', age: 15}];
function arrCreat(arr) {
    for (const aElement of arr) {
        document.write(`<div>${aElement.id}</div>`);
        document.write(`<div>${aElement.name}</div>`);
        document.write(`<div>${aElement.age}</div>`);
    }
}
    arrCreat(arr);


