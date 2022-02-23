// -- отримує текст з параграфа з id "content"
let idContent = document.getElementById('content');
console.log(idContent);
console.log(idContent.innerText);


// -- отримує текст з блоку з id "rules"
let divContent = document.querySelector('#rules');
console.log(divContent);
console.log(idContent.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
let changeText = document.getElementById('content');
let newP = 'Возвращает ссылку на элемент по его идентификатору (ID); идентификатор является строкой, которая может быть использована для идентификации элемента; она может быть определена при помощи атрибута id в HTML или из скрипта.'
changeText.textContent = newP;
console.log(changeText.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший
let changeRules = document.querySelector('#rules');
let newPrules = 'Начинающим следует знать, что верхний регистр в части имени метода \'Id\' должен быть точным для корректного вызова функции; "getElementByID" будет не корректно, как бы естественно это ни казалось.'
changeRules.textContent = newPrules;
console.log(changeRules.innerText);

// -- змініть кожному елементу колір фону на червоний
let changecolor = document.getElementById('content');
changecolor.style.backgroundColor = 'red';

let changecolorrules = document.getElementById('rules');
changecolorrules.style.backgroundColor = 'red';

let changeUl = document.querySelector('body > ul');
changeUl.style.backgroundColor = 'black';


// -- змініть кожному елементу колір тексту на синій
let changecolorText = document.getElementById('content');
changecolorText.style.color = 'blue';

let changecolorTextrules= document.getElementById('rules');
changecolorTextrules.style.color = 'blue';

let changeUltextcolor = document.querySelector('body > ul');
changeUltextcolor.style.color = 'blue';


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesList = document.querySelectorAll('#rules');
console.log(rulesList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changeUltextcolorRed = document.getElementsByClassName('fc_rules');
for (const changeUltextcolorRedElement of changeUltextcolorRed) {
    changeUltextcolorRedElement.style.color = 'red';
};
