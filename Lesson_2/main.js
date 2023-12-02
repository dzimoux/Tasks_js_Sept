let arr = [
  1,
  { key:'item'},
  3,
  'Second item',
  5,
  6,
  7,
  8,
  true,
  {name: 'Dima'}
]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// ----------------------------------------------------------------

let book1 ={
  title:'Eneida',
  pageCount:75,
  genre:'Burlesque-travesty poem'
}
let book2 ={
  title:'Kobzar',
  pageCount:250,
  genre:'Poetry'
}
let book3 ={
  title:'Taras Bulba',
  pageCount:340,
  genre:'Historical novel'
}
// ----------------------------------------------------------------

let book4 ={
  title:'Eneida',
  pageCount:75,
  genre:'Burlesque-travesty poem',
  authors: [{name: 'Ivan Kotliarevskyi'},
    {age:46}]
}
let book5 ={
  title:'Kobzar',
  pageCount:250,
  genre:'Poetry',
  authors: [{name: 'Taras Shevchenko'},
    {age:37}]
}
let book6 = {
  title: 'Taras Bulba',
  pageCount: 340,
  genre: 'Historical novel',
  authors: [{name: 'Mykola Hohol'},
    {age: 33}]
}
// ----------------------------------------------------------------


let users = [
  {name:'Ira',
    username:'Irishka-23',
    password:'33ssrfw'
  },
  {name:'Alina',
    username:'alisha333',
    password:'wefwefwef'
  },
  {name:'Oksana',
    username:'oksi-3ee3',
    password:'fthrhffg'
  },
  {name:'Katya',
    username:'katka__shmatka',
    password:'rthrthdf'
  },
  {name:'Andriy',
    username:'andriiko33223',
    password:'ethgrtlhkrl'
  },
  {name:'Oleh',
    username:'king-of_2',
    password:'yukyukkfff'
  }
  ,
  {name:'Elya',
    username:'potreblyad_43',
    password:'defgefgeg'
  },
  {name:'Maxym',
    username:'volf_334454',
    password:'hlkrthlkre'
  },
  {name:'Volodya',
    username:'toi-sho-ne-putin-3232',
    password:'fhfgjkkuku'
  },
  {name:'Mykola',
    username:'nick_4444',
    password:'jjhljhljw'
  }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// ---------------------------------------------------------
let x;
x = 1;
if(x !== 0){
  console.log('Вірно')
} else {
  console.log('Невірно')
}
x = 0;
if(x !== 0){
  console.log('Вірно')
} else {
  console.log('Невірно')
}
x = -3;
if(x !== 0){
  console.log('Вірно')
} else {
  console.log('Невірно')
}
// ----------------------------------------------------
let time;
let firstP;
let secondP;
let thirdP;
let fourthP;
time = 11;

if (time<15 && time>=0){
   firstP = time;
   console.log('firstP')
} else if(time>=15 && time<30){
  secondP = time;
  console.log('secondP')
} else if(time>=30 && time<45){
  thirdP = time;
  console.log('thirdP')
} else if(time>=45 && time<=59){
  fourthP = time;
  console.log('fourthP')
}
// ---------------------------------------------

let day;
let firstMonthP
let secondMonthP
let thirdMonthP
day = 12;

if (day >=0 && day < 10){
  firstMonthP = day;
  console.log('first monthly part')
} else if (day > 10 && day < 20){
  secondMonthP = day;
  console.log('second monthly part')
} else if (day > 20 && day < 30){
  thirdMonthP = day;
  console.log('third monthly part')
}
// ------------------------------------------------
let dayPlanner = prompt('Text a day`s number of the week')
switch (dayPlanner) {
  case "1":
    console.log('Monday!');
    alert('Monday!')
    break;
  case "2":
    console.log('Tuesday!');
    alert('Tuesday!')
    break;
  case "3":
    console.log('Wednesday!');
    alert('Wednesday!')
    break;
  case "4":
    console.log('Thursday!');
    alert('Thursday!')
    break;
  case "5":
    console.log('Friday!');
    alert('Friday!')
    break;
}
// ---------------------------------------
let a
let b

a = 56;
b = 38;
if(a>b){
  console.log(a)
}else if(b>a){
  console.log(b)
}else if(a===b){
  console.log(a + 'are equal as number' + b )
} else{
  console.log('Please, text numbers, not another symboles')
}
// -------------------------------------------------
let xVar = 30;
if(xVar === 'yes' || typeof (xVar) === 'number'){
xVar = 'default';
console.log(xVar);
} else { console.log('wrong meaning')}
// -------------------------------------------------
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
  console.log('Супер')
} else if(coursesAndDurationArray[1].monthDuration > 5){
  console.log('Супер')
}  else if(coursesAndDurationArray[2].monthDuration > 5){
  console.log('Супер')
}  else if(coursesAndDurationArray[3].monthDuration > 5){
  console.log('Супер')
} else if(coursesAndDurationArray[4].monthDuration > 5){
  console.log('Супер')
} else if(coursesAndDurationArray[5].monthDuration > 5){
  console.log('Супер')
}
