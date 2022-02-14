//1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strHello = 'hello world';
console.log(strHello.length);

let strLorem = 'lorem ipsum';
console.log(strLorem.length);

let strCool = 'javascript is cool';
console.log(strCool.length);


//2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world';
let strHelloUpper = hello.toUpperCase();
console.log(strHelloUpper);

let lorem = 'lorem ipsum';
let strLoremUpper = lorem.toUpperCase();
console.log(strLoremUpper);

let cool = 'javascript is cool';
let strCoolUpper = cool.toUpperCase();
console.log(strCoolUpper);


//3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let helloBig = 'HELLO WORLD';
let strHelloLower = helloBig.toLowerCase();
console.log(strHelloLower);

let loremBig = 'LOREM IPSUM';
let strLoremLower = loremBig.toLowerCase();
console.log(strLoremLower);

let coolBig = 'JAVASCRIPT IS COOL';
let strCoolLower = coolBig.toLowerCase();
console.log(strCoolLower);


//4. - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
let clearStr = strDirty.trim();
console.log(clearStr);


//5. - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let stringToarray = (a) => {
    return a.split(' ');
}
console.log(stringToarray(str))
document.write(stringToarray(str));


//6. Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str1 = 'Каждый охотник желает знать';
let delete_characters = (a) => {
    return a.substring(0,7);
};
console.log(delete_characters(str1))
document.write(delete_characters(str1));


//7.  Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str2 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.trim().toUpperCase().replaceAll(' ', "-")
};
console.log(insert_dash(str2));


//8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str3 = 'квадрат';
let upper= (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
console.log(upper(str3));


//9. - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str4 = 'каждый охотник желает знать';
let capitalize = (str)  => {
    let str2 = ''
    for (let v of str.split(' ')) {
        str2 = str2 + String(v.replace(v[0], v[0].toUpperCase())) + " "
    }
    return str2;
}
console.log(capitalize(str4));