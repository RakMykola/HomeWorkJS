// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divwrap1 = document.createElement('div');
let divwrap2 = document.createElement('div');
document.body.appendChild(divwrap1);
document.body.appendChild(divwrap2);

let forma = document.createElement('form');
forma.setAttribute('name', 'forma');
let forma2 = document.createElement('form');
forma2.setAttribute('name', 'forma2');
divwrap1.appendChild(forma);
divwrap2.appendChild(forma2);

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');

let input2 = document.createElement('input');
input2.setAttribute('name', 'input2');

let input3 = document.createElement('input');
input3.setAttribute('name', 'input3');

let input4 = document.createElement('input');
input4.setAttribute('name', 'input4');

let btn = document.createElement('button');
btn.innerText = 'Жми';

document.body.appendChild(btn);
forma.append(input1,input2);
forma2.append(input3,input4);

btn.addEventListener('click', function (){
    console.log(document.forms.forma.input1.value);
    console.log(document.forms.forma.input2.value);
    console.log(document.forms.forma2.input3.value);
    console.log(document.forms.forma2.input4.value);
})

let br= document.createElement('br');
document.body.appendChild(br);
let divmargin= document.createElement('div');
divmargin.style.margin = '10px';
document.body.appendChild(divmargin);
// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let inp1 = document.createElement('input');
let inp2 = document.createElement('input');
let inp3 = document.createElement('input');
let btn1 = document.createElement('button');

//   Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку
let words = ['mud', 'dod', 'duck'];
let in1 = document.createElement('input');
let btn2 = document.createElement('button');
btn2.innerText = 'Prob';
document.body.append(in1, btn2);

btn2.addEventListener('click', function () {
    let valueInput = in1.value;
    for (let w of words) {
        if (w === valueInput) {
            alert('Не добре');
            in1.value = '';
            return;
        }
    }
    if (valueInput) {
        alert('Добре');
        in1.value = '';
    }
})