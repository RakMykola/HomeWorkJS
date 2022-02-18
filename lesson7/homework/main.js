// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this['id']= id;
    this['name']= name;
    this['surname']= surname;
    this['email']= email;
    this['phone']= phone;
};


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let userArray = [
 new User (1,'Mykola', 'Rak', "sjsh@kdk.com",'037685763'),
 new User (2,'Ivan', 'Pek', "erere@kdk.com",'09398989899'),
 new User (3,'Vajsa', 'KKJKk', "wrfdfd@kdk.com",'09998451299'),
 new User (4,'Tanja', 'Kola', "vfvrfse@kdk.com",'06398989899'),
 new User (5,'Valjan', 'Lopa', "vfdfvfd@kdk.com",'06798989899'),
 new User (6,'Oleg', 'Klop', "vnsdks@kdk.com",'06898989899'),
 new User (7,'Igor', 'Wert', "vdvdfd@kdk.com",'09598989899'),
 new User (8,'Andr', 'Dest', "vvdvdf@kdk.com",'09198989899'),
 new User (9,'Romaan', 'Roms', "vvfresx@kdk.com",'03698989899'),
 new User (10,'Ntalia', 'Lsfkr', "vvbgaz@kdk.com",'05398989899'),
];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let filterArrey = userArray.filter(value => {
    if (value.id %2===0){
        return true;
    }else{
        return false;
    }
})
console.log(filterArrey);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArrey = userArray.sort((a, b) =>{
    return a.id - b.id;
} )
console.log(sortArrey);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
class Client{
    constructor(id, name, surname,email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrclient = [
    new Client (1,'Mykola', 'Rak', "sjsh@kdk.com",'0937685763', ['sdfsd', 'ofllf']),
    new Client (2,'Ivan', 'Pek', "erere@kdk.com",'09398989899', ['sdfsd', 'ofllf','ssdsds']),
    new Client (3,'Vajsa', 'KKJKk', "wrfdfd@kdk.com",'09998495129', ['sdfsd', 'ofllf','dfdfdf','gggfdf']),
    new Client (4,'Tanja', 'Kola', "vfvrfse@kdk.com",'06398989899', ['sdfsd', 'ofllf','dfdf','dfdf','eeerere']),
    new Client (5,'Valjan', 'Lopa', "vfdfvfd@kdk.com",'06798989899', ['sdfsd']),
    new Client (6,'Oleg', 'Klop', "vnsdks@kdk.com",'06898989899', ['sdfsd', 'ofllf','sdfsd', 'ofllf','dfdf','dfdf','eeerere']),
    new Client (7,'Igor', 'Wert', "vdvdfd@kdk.com",'09598989899', ['sdfsd', 'ofllf','ofllf','dfdfdf']),
    new Client (8,'Andr', 'Dest', "vvdvdf@kdk.com",'09198989899', ['sdfsd', 'ofllf']),
    new Client (9,'Romaan', 'Roms', "vvfresx@kdk.com",'03698989899', ['sdfsd', 'ofllf','sdfsd', 'ofllf','sdfsd', 'ofllf','sdfsd', 'ofllf','dfdf','dfdf','eeerere']),
new Client (10,'Ntalia', 'Lsfkr', "vvbgaz@kdk.com",'05398989899', ['sdfsd', 'ofllf','sdfsd', 'ofllf','sdfsd', 'ofllf','dfdf','dfdf','eeerere']),
];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = arrclient.sort((a, b) => {
    return a.order.length - b.order.length;
})
console.log(sortClient);