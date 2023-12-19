// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArr = [];
let user = new User(1,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user1 = new User(2,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user2 = new User(3,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user3 = new User(4,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user4 = new User(5,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user5 = new User(6,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user6 = new User(7,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user7 = new User(8,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user8 = new User(9,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

let user9 = new User(10,'Oleh', 'Demchenko', 'oleh1@email.com', 380972433234)

userArr.push(user,user1,user2,user3, user4,user5,user6,user7,user8,user9)
console.log(userArr)

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
userArr.filter((a) => {
    if(a.id % 2 === 0){
        console.log(a)
    }
})

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let increaseArr = userArr.sort((a,b) => {return a.id - b.id} )
console.log(increaseArr)

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Product {
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let Client =
    [
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 33223),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 23123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453,23123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 342342342),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 453245345245)
    ]
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = Client.sort((a,b)=> {
    return a.order - b.order
})
console.log(sortClient)

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model,company,year,maxspeed,engine){
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
   this.drive = function(){
        console.log(`Їдемо зі швидкістю ${maxspeed} на годину`)
    };
   this.info = function(){
       console.log(`Model - ${model}, company -${company}, year - ${year}, maxspeed - ${maxspeed}, engine - ${engine}`)
   }
   let newSpeed
    this.increaseMaxSpeed = function(newSpeed){
       console.log(maxspeed + newSpeed)
   };
   this.changeYear = function (newValue){
       year = newValue
       console.log(year)
   }
   function addDriver(driver){
this.driver  = driver;
   }
}
let car1 = new Car('X6', 'BMW', 2020, 190, 2.2 )
car1.increaseMaxSpeed(60)

// - (Те саме, тільки через клас)


class Car2 {
    constructor (model,company,year,maxspeed,engine){
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
    this.drive = function(){
        console.log(`Їдемо зі швидкістю ${maxspeed} на годину`)
    };
    this.info = function(){
        console.log(`Model - ${model}, company -${company}, year - ${year}, maxspeed - ${maxspeed}, engine - ${engine}`)
    }
    let newSpeed
    this.increaseMaxSpeed = function(newSpeed){
        console.log(maxspeed + newSpeed)
    };
    this.changeYear = function (newValue){
        year = newValue
        console.log(year)
    }
    function addDriver(driver){
this.driver = driver
    }
}}
let car2 = new Car2('X5', 'BMW', 2016, 170, 2.2 )
car2.increaseMaxSpeed(60)




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderella = [
    new CinderClass('Olesya', 22, 39),
    new CinderClass('Olesya', 25, 38),
    new CinderClass('Olesya', 27, 35),
    new CinderClass('Olesya', 23, 34.5),
    new CinderClass('Olesya', 23, 36.5),
    new CinderClass('Olesya', 28, 35),
    new CinderClass('Olesya', 32, 37),
    new CinderClass('Olesya', 18, 37.5),
    new CinderClass('Olesya', 20, 38.5),
    new CinderClass('Olesya', 21, 39)

]

let prince = new CinderClass('Volodya', 27, 37)

for (let i = 0; i < cinderella.length; i++) {
    let coupleAr = [];
    const cinderElement = cinderella[i];
    if(cinderElement.footSize === prince.footSize){
        console.log(cinderElement,'efwwfd')
    }

}

console.log(cinderella.find((trueCin => trueCin.footSize === prince.footSize)))

