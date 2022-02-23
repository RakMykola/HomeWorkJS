// Все робити за допомоги js.
// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let newElement = document.createElement('div');
newElement.innerText = 'Okten School is cool';
newElement.classList.add('wrap');
newElement.classList.add('collapse');
newElement.classList.add('alpha');
newElement.classList.add('beta');
newElement.style.backgroundColor = 'silver';
newElement.style.color = 'red';
newElement.style.fontSize = '40px';
document.body.append(newElement);
let clonDiv = newElement.cloneNode(true);
document.body.append(clonDiv);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arrmenu = ['Main','Products','About us','Contacts'];
for (const s of arrmenu) {
    let user = s;
    user  =  document.createElement('li');
    user.innerText = s;
    let menu1 = document.getElementsByClassName('menu')
    menu2 = menu1[0];
    menu2.append(user);

}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const c of coursesAndDurationArray) {
    let divTitle = document.createElement('div');
    divTitle.innerText = `${c.title} ${c.monthDuration}`;
    document.body.append(divTitle);
}



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const b of coursesAndDurationArray2) {
    let divIt = document.createElement('div');
    divIt.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = b.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = b.monthDuration;
    divIt.appendChild(h1);
    divIt.appendChild(p);
    document.body.appendChild(divIt);

}

// let wrap = document.createElement('div'); // div
// wrap.classList.add('wrap'); // div class=wrap