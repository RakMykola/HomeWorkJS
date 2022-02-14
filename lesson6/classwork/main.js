//1. - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
function valid(str) {
    return str.replaceAll('..',' ')
        .replaceAll('---',' ')
        .replaceAll('__',' ');
    }
console.log(valid(n3));


//2. - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100
let random = (length) =>{
    let arrEmp = [];
    for (let i = 0; i < length; i++) {
        arrEmp.push(Math.floor(Math.random()*100));
    }
    return arrEmp;
}
console.log(random(50))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(random(20).sort(function (a,b) {
    return a - b;
}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(random(100).filter(function (value) {
    if(value % 2 === 0){
        return true;
    }else {
        return  false;
    }
}))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові
let randomString = (length) =>{
    let arrEmp = [];
    for (let i = 0; i < length; i++) {
        arrEmp.push(Math.floor(Math.random()*100));
    }
    return arrEmp.toString();
}
console.log(randomString(10));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
    let nums5 = [11,21,3];
let sortNums = (arr, direction) => {
   if(direction === 'Збільшення') return arr.sort((a, b) => a - b);
   else if(direction === 'Зменшення') return arr.sort((a, b) => b - a);
};
console.log(sortNums(nums5,'Зменшення'));
sortNums('Збільшення') // [3,11,21]
sortNums('Зменшення') // [21,11,3]

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort(function (a,b) {
    return b.monthDuration  - a.monthDuration;
})

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursFilter = coursesAndDurationArray.filter((value) => {
    if (value.monthDuration >= 5){
        return true;
    }
    else {
        return  false;
    }
});
console.log(coursFilter);