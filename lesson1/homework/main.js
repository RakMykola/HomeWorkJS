// 1. - Створити змінні. Присвоїти кожному з них значення:
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let strTrue = 'true';
let strFalse = 'false';

//2.  Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(
    a,b,c,d,num1,num2,num3,num4,num5,num6,num7,strTrue,strFalse
);
document.write(
    a,' ',b,' ',c,' ',d,' ',num1,' ',num2,' ',num3,' ',
    num4,' ',num5,' ',num6,' ',num7,' ',strTrue,' ',strFalse,' '
);
// alert(
//     a+' '+b+' '+c+' '+d+' '+num1+' '+num2+' '+num3+' '+
//     num4+' '+num5+' '+num6+' '+num7+' '+strTrue+' '+strFalse+' '
// );

//3.  Переприсвоїти кожній змінній з завдання значення на довільне.
 a = 'bye';
 b = 'okten';
 c = 'net';
 d = 'pl';
 num1 = 2;
 num2 = 20;
 num3 = 1000;
 num4 = 250;
 num5 = 8.65;
 num6 = 3.9;
 num7 = 32;
 strTrue = 'Правда';
 strFalse = 'Брехня';

//4.  Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(
    a,b,c,d,num1,num2,num3,num4,num5,num6,num7,strTrue,strFalse
);
document.write(
    a,' ',b,' ',c,' ',d,' ',num1,' ',num2,' ',num3,' ',
    num4,' ',num5,' ',num6,' ',num7,' ',strTrue,' ',strFalse,' '
);
// alert(
//     a+' '+b+' '+c+' '+d+' '+num1+' '+num2+' '+num3+' '+
//     num4+' '+num5+' '+num6+' '+num7+' '+strTrue+' '+strFalse+' '
// );

//5.  Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Микола';
let middleName = 'Степанович';
let lastName = 'Рак';
let person = firstName + middleName + lastName;

//6.  За допомогою 3х різних prompt() отримати 3 слова
// які являються вашими Імям, По-Батькові та роками.
// let first = prompt('Імя?');
// let middle = prompt('По батькові?');
// let year = prompt('Вік?');

// 7. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// alert(
//     'Вітаю' +' ' +first+ ' ' +middle+ ' '+'.Тобі'+' ' +year+' '+ 'роки'
// )

// 8. За допомогою оператора typeof визначити типи наступних змінних
// та вивести їх в консоль.
let h = 100;
let j = '100';
let y = true;
console.log(typeof h);
console.log(typeof j);
console.log(typeof y);

//10.  Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
let num56 = 5 < 6;
console.log(num56);
let num56f = 5 > 6;
console.log(num56f);
let num56ff = 5 === 6;
console.log(num56ff);
let num56fff =  5 ==! 6;
console.log(num56fff);

let num10 = 10 === 10;
console.log(num10);
let num10t = 10 === 10;
console.log(num10t);
let num10f = 10 > 10;
console.log(num10f);
let num10ff = 10 < 10;
console.log(num10ff)
let num10fff = 10 !== 10;
console.log(num10fff);

let num123f = 123 === '123';
console.log(num123f)
let num123t = 123 !== '123';
console.log(num123t)


//24.  Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let m = 5;
// document.write(str + m + "<br/>"); результат 205 тому що строка всіх заражає і виходить конкатинація
// document.write(str - m + "<br/>"); результат 15, при відніманні зі строкою виходить обчислення.
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");