// - Создать произвольный елемент с id = text.
//     Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let hidtext = document.getElementById('text');
let btnHiden = document.getElementById('btnHid')
btnHiden.onclick = function () {
    hidtext.style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btnHiden1 = document.getElementById('btnHid1')
btnHiden1.onclick = function () {
    btnHiden1.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btnYear = document.getElementById('btnyear');
btnYear.onclick = function () {
    let yearInput = document.getElementById('year').value;
    if (yearInput < 18 && yearInput >= 1){
    alert('ще дитина');
    }else {
        alert('вік більше 18')
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике

let elMenu = document.querySelector('.menu');
let elTitle = document.querySelector('.title');

elTitle.onclick = function () {
    elMenu.classList.toggle('hidden');
};


