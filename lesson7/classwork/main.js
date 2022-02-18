// - Створити функцію конструктор яка дозволяє створювати об'єкти car,' +
// ' з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,manufacturer,year,maxSpeed,capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed}км на годину`)
    }
    this.info = function () {
        document.write(`Модель - ${model} <br>`,
            `Виробник - ${manufacturer} <br>`,
            `Рік випуску - ${year} <br>`,
            `Макс.швидкість - ${maxSpeed} <br>`,
            `Об'єм двигуна - ${capacity} <br>`
        )

    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;
            }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
        document.write(`Ваділа - ${driver} <br>`)
    }
}
let car1 =new Car('bmw','german',2002,220,'1,5');
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(50)
car1.changeYear(2020);
car1.addDriver('Іван')
console.log(car1)



// - (Те саме, тільки через клас)
class Car1 {
    constructor(model,manufacturer,year,Speed,capacity) {

        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = Speed;
        this.capacity = capacity;

        this.drive1 = function () {
            console.log(`їдемо зі швидкістю ${Speed}км на годину`);
        }

        this.info1 = function () {
            document.write(`Модель - ${model} <br>`,
                `Виробник - ${manufacturer} <br>`,
                `Рік випуску - ${year} <br>`,
                `Макс.швидкість - ${Speed} <br>`,
                `Об'єм двигуна - ${capacity} <br>`
            )

        }

        this.increaseMaxSpeed1 = function (newSpeed) {
            this.Speed = Speed + newSpeed;
            document.write(`Нова швидкість - ${this.Speed} <br>`)
        }

        this.changeYear1 = function (newValue) {
            this.year = newValue;
        }

        this.addDriver1 = function (driver) {
            this.driver = driver;
            document.write(`Ваділа - ${driver} <br>`)
        }
    }
    drive3 () {
        console.log(`їдемо зі швидкістю ${this.Speed}км на годину`);
    }
}
let car2 = new Car1('sens','ua',2010,100,1.3);
console.log(car2);
car2.drive1();
car2.info1();
car2.increaseMaxSpeed1(50)
car2.changeYear1(2015);
car2.addDriver1('Валєра')
car2.drive3()
console.log(car2)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

}
let arrpop = [
    new  popelushka('lis',15,30),
    new  popelushka('Nad',20,35),
    new  popelushka('Hal',25,31),
    new  popelushka('Mal',18,32),
    new  popelushka('Kro',95,40),
    new  popelushka('Pol',19,50),
    new  popelushka('Dol',30,25),
    new  popelushka('Mir',22,36),
    new  popelushka('Ser',50,42),
    new  popelushka('Ten',24,28)
];
console.log(arrpop);

class prync {
    constructor(name, age, tuflja) {
        this.name = name;
        this.age = age;
        this.tuflja = tuflja;
    }

}

let pryncShrek = new prync('Shrek', 50,50);

function Love(arrpop,pryncShrek) {
    for (let arrpopElement of arrpop) {
        if (arrpopElement.size === pryncShrek.tuflja){
            return `Попелюшка: ${arrpopElement.name}`;
        }
    }
}

console.log(Love(arrpop,pryncShrek));

let popel = arrpop.find((item) => item.size === pryncShrek.tuflja);
console.log(popel);