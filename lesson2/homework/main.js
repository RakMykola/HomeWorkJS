//1. Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
const time = 20;
if (time <= 15){
    console.log('Перша четверть години');
} else if (time <=30){
    console.log('Друга четверть години')
}
 else if (time <= 45){
    console.log('Третя четверть години');
} else if (time <=59){
    console.log( 'Четверта четверть години')
}

// 2. У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
const day = 25;
if (day <= 10){
    console.log('Перша декада місяця');
} else if (day <=20){
    console.log('Друга декада місяця')
}
else if (day <= 31){
    console.log('Третя декада місяця');
}

//3. У нас є змінна test, якщо дорівнює true, виведіть 'Вірно',
// інакше виведіть 'Неправильно'.
//Перевірте роботу скрипта при test, що дорівнює true, false.
// Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test1 = true ? console.log('Вірно'): console.log('Неправильно');

// const test = confirm('???') ? 'Вірно' : 'Неправильно';
// console.log(test);

//4. Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
const a = 0;
if (a !== 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

//5. Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день.
let weekday = 6;
switch (weekday) {
    case 1:
        console.log('Понеділок- Прибирання');
        break;
    case 2:
        console.log('Вівторок - Миття');
        break;
        case 3:
        console.log('Середа - Навчання');
        break;
        case 4:
        console.log('Четвер - Робота');
        break;
        case 5:
        console.log('Пятниця - Купання');
        break;
        case 6:
        console.log('Субота - Генеральне прибирання');
        break;
        case 7:
        console.log('Неділя - Віддих');
        break;
}

//6. Потрібно визначити Високосний рік чи ні.
// Високосні роки діляться націло на 4.
const year = 2017;
if (year % 4 === 0)
{
    console.log('Високосний рік');
} else{
    console.log('Не високосний рік');
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати:
// «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
const know = prompt('Яка офіційна назва Javascript?');
if (know === 'ECMAScript'){
    console.log('Правильно');
}else {
    console.log('Не знаєте? ECMAScript');
}