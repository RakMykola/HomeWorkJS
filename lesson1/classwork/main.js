// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
let arr10 = [10, 20, 15, 35, 55, 45, 80, 11, 25, 60];
let result = arr10[0]+arr10[1]+arr10[2]+arr10[3]+arr10[4]
    +arr10[5]+arr10[6]+arr10[7]+arr10[8]+arr10[9];
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// // let book = {
// //     name: 'Гра Престолів',
// //     numberPages: 1000,
// //     genre: 'Фентезі',
// // };

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
//  let book = {
//      name: 'Гра Престолів',
//      numberPages: 1000,
//      genre: 'Фентезі',
//      autor: 'Джордж Мартін'
//  };

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість
// сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
const books = [bok1={
    name: 'Гра Престолів',
    numberPages: 1000,
    genre: 'Фентезі',
    autor: 'Джордж Мартін'},
    book2={
    name: 'Гаррі Поттер',
    numberPages: 2000,
    genre: 'Фентезі',
        autor: 'Дж. Роулінг'},
    book3={
        name: 'Буквар',
        numberPages: 500,
        genre: 'Навачальна',
        autor: 'Школа'}
];
console.log(books);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
const height = 23;
const width = 10;
const s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
const heightC = 10;
const dC = 4;
const v = Math.PI *  ((dC /2) * (dC /2)) * heightC;
console.log(Math.round(v));

// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
// (число, ступінь) або оператор зведення в ступінь **).
const n = 3;
const m = 4;
const nKvadrat = n**2;
const mKvadrat = m**2;
const k = nKvadrat + mKvadrat;
console.log(k**2);