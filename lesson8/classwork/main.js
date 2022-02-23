// a) додає клас з назвою групи, елементу з ід main_header
let products = document.getElementById('main_header');
products.classList.add('linkList4');


// b) робить шириниу елементу ul 400px
let changeUlwidth = document.querySelectorAll('body > ul');
for (const changeUlwidthElement of changeUlwidth) {
           changeUlwidthElement.style.width = '400px';
};


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListWidth = document.getElementsByClassName('linkList');
for (const linkListWidthElement of linkListWidth) {
    linkListWidthElement.style.width = '50%';
}


// d) отримує текст який зберігається в елементі з класом listElement2
let listel2Text = document.getElementsByClassName('linkList listElement2');
console.log(listel2Text[0].innerText);


// e) отримує всі елементи li та змінює ім колір фону на сірий
let changeLicolor = document.querySelectorAll('body > ul > li');
for (const changeLicolorElement of changeLicolor) {
    changeLicolorElement.style.backgroundColor = 'silver';
}


// f) отримує всі елементи 'a' та додає їм клас anchor
let changeA = document.getElementsByTagName('a');
for (const changeAElement of changeA) {
    changeAElement.classList.add('anchor')
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let changeLink3 = document.getElementsByTagName('a');
for (const changeLink3Element of changeLink3) {
    if (changeLink3Element.innerText === 'link3'){
        changeLink3Element.style.fontSize = '40px';
    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let addElement = document.getElementsByTagName('a');
for (const addElementElement of addElement) {
    let xxxElement = addElementElement.innerText;
    addElementElement.classList.add(`element_${xxxElement}`);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let ColorSubHead = document.getElementsByClassName('sub-header');
// for (const colorSubHeadElement of ColorSubHead) {
//     colorSubHeadElement.style.backgroundColor = prompt('Введіть Колір фону: ()')
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let colorContent2 = document.getElementsByClassName('sub-header');
// for (const colorContent2Element of colorContent2) {
//     if (colorContent2Element.innerText === 'content 2 segment'){
//         colorContent2Element.style.color = prompt('Введіть Колір тексту: ()')
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let changeContent1 = document.getElementsByClassName('content_1');
// for (const changeContent1Element of changeContent1) {
//     changeContent1Element.innerText = prompt('Введіть текст: ()');
// }


// l) отримати елементи p та змінити їм padding на 20px
let changeP = document.getElementsByTagName('p');
for (const changePElement of changeP) {
    changePElement.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let changeText2 = document.getElementsByClassName('text2');
changeText2[0].innerText = 'dec-2021';