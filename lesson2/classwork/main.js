//1. Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
const num1 = 10;
const num2 = 15;
if (num1 > num2){
    console.log(num1+' '+'Максимальне число');
} else if (num1 === num2){
    console.log('Рівні числа');
} else if (num2 > num1){
    console.log(num2 + ' '+'Максимальне число');
}

// 2. У першому під'їзді квартири з 1 до 20. У другому з 21 по 48.
// У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
const numberApartment = 25;
if (numberApartment >=0 && numberApartment<= 20){
    console.log('Квартира у першому підїзді');
} else if (numberApartment >=20 && numberApartment <=48){
    console.log('Квартира у другому підїзді')
}
else if (numberApartment >=48 && numberApartment <= 90){
    console.log('Квартира у третьому підїзді');
}

//3. Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
const number = 15;
if (number === 10){
    console.log('Вірно');
}else if (number !== 10){
    console.log('НЕВІРНО')
}

//4.  Ми маємо змінну x в яку користувач задає  значення,
// якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3,
//     якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
const x = undefined;
if (typeof x === 'number'){
    console.log('1'+' '+ 'number');
}else if (typeof x === 'string'){
    console.log('2'+' '+ 'string')
}else if (typeof x === 'boolean'){
    console.log('3'+' '+ 'boolean')
}else if (typeof x === 'object'  || typeof x === 'Array'){
    console.log('4'+' '+ 'object or array')
}else{
    console.log('Інше');
}

//5. Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//Змінна, яка характеризує температуру. Якщо температура від +10 до +22
// вивести повідомлення що ми йдемо ВЧИТИСЯ .
//Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома
// і вчимося ОНЛАЙН
const t = 5;
if (t >= 10 && t<= 22){
    console.log('Йдемо вчитися');
}else{
    console.log('Сидимо вдома і вчимось ОНЛАЙН');
}

//6. За допомогою switch case - реалізувати гру - вікторину,
// де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д )
//     і якщо число не підходить тоді  вивести Повідомлення
//     - що число не вірне ... .
let viktoryna = 3;
switch (viktoryna) {
    case 1:
        console.log('Приз Автомобіль');
        break;
    case 2:
        console.log('Приз Мотоцикл');
        break;
    case 3:
        console.log('Приз Телефон');
        break;
    case 4:
        console.log('Приз Піца');
        break;
    case 5:
        console.log('Приз Квартира');
        break;
    default:
            console.log('Число не вірне');

}