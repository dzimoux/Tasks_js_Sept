// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length)
console.log(str2.length)
console.log(str3.length)

// Перевести до великого регістру наступні стрінгові значення
console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())
// Перевести до нижнього регістру настипні стрінгові значення
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase())
console.log(str5.toLowerCase())
console.log(str6.toLowerCase())
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   ';
console.log(str7.trim())
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    // let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str8 = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {

    console.log(str.split(' '))
}
stringToarray(str8)
// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numb1 = [10,8,-7,55,987,-1011,0,1050,0]
numb1.map((numbers) => {
    console.log(numbers.toString())
})
// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numb2 = [11,21,3];
let sortNumsAsc = (nums, sortType) => {
    if(sortType === 'ascending'){
        let arrAscend = nums.sort((a,b) => {
            return a - b
        })
        console.log(arrAscend)
    } else if(sortType === 'descending'){
        let arrDescend = nums.sort((a,b) => {
            return b - a
        })
        console.log(arrDescend)
    }
}
sortNumsAsc(numb2,'ascending')
sortNumsAsc(numb2,'descending')
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//  ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

console.log(coursesAndDurationArray.sort((course1, course2) => {
    return course2.monthDuration - course1.monthDuration
}))

console.log(coursesAndDurationArray.filter((course)=> {
    return course.monthDuration > 5
}))
let newCourses = coursesAndDurationArray.map((course)=>{
     course.id = 123
    return course
})
console.log(newCourses)

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
    // cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    //     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    // color:'', // 'red','black'
// }

const cards = [
    {cardSuit:'spade', value: '6', color:'black'},
    {cardSuit:'spade', value: '7', color:'black'},
    {cardSuit:'spade', value: '8', color:'black'},
    {cardSuit:'spade', value: '9', color:'black'},
    {cardSuit:'spade', value: '10', color:'black'},
    {cardSuit:'spade', value: 'jack', color:'black'},
    {cardSuit:'spade', value: 'queen', color:'black'},
    {cardSuit:'spade', value: 'king', color:'black'},
    {cardSuit:'spade', value: 'ace', color:'black'},
    {cardSuit:'diamond', value: '6', color:'red'},
    {cardSuit:'diamond', value: '7', color:'red'},
    {cardSuit:'diamond', value: '8', color:'red'},
    {cardSuit:'diamond', value: '9', color:'red'},
    {cardSuit:'diamond', value: '10', color:'red'},
    {cardSuit:'diamond', value: 'jack', color:'red'},
    {cardSuit:'diamond', value: 'queen', color:'red'},
    {cardSuit:'diamond', value: 'king', color:'red'},
    {cardSuit:'diamond', value: 'ace', color:'red'},
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: '7', color:'red'},
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: '7', color:'red'},
    {cardSuit:'heart', value: '8', color:'red'},
    {cardSuit:'heart', value: '9', color:'red'},
    {cardSuit:'heart', value: '10', color:'red'},
    {cardSuit:'heart', value: 'jack', color:'red'},
    {cardSuit:'heart', value: 'king', color:'red'},
    {cardSuit:'heart', value: 'ace', color:'red'},
    {cardSuit:'clubs', value: '6', color:'black'},
    {cardSuit:'clubs', value: '7', color:'black'},
    {cardSuit:'clubs', value: '8', color:'black'},
    {cardSuit:'clubs', value: '9', color:'black'},
    {cardSuit:'clubs', value: '10', color:'black'},
    {cardSuit:'clubs', value: 'jack', color:'black'},
    {cardSuit:'clubs', value: 'queen', color:'black'},
    {cardSuit:'clubs', value: 'king', color:'black'},
    {cardSuit:'clubs', value: 'ace', color:'black'},
    {cardSuit:'clubs', value: '6', color:'black'},
    {cardSuit:'clubs', value: '7', color:'black'},
]

let findAllSix = cards.filter((item) => {
    return item.value === '6';
})
console.log(findAllSix)
let findAllHeart = cards.filter((item)=> {
    return item.cardSuit ==='heart';
})
console.log(findAllHeart)
let findAllSpade = cards.filter((item)=> {
    return item.cardSuit ==='spade';
})
console.log(findAllSpade)
let findClubs = cards.filter((item)=> {
    if(parseInt(item.value) > 9 && item.cardSuit === 'clubs' ){
        return item
    }

})
console.log(findClubs)
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
    // spades:[],
        // diamonds:[],
    // hearts:[],
    // clubs:[]
// }
let cardReducing = cards.reduce((accumulator, card ) => {
if (card.cardSuit === 'spade'){
    accumulator[0].push(card)
} else if (card.cardSuit === 'diamond'){
    accumulator[1].push(card)
} else if (card.cardSuit === 'heart'){
    accumulator[2].push(card)
} else if (card.cardSuit === 'clubs'){
    accumulator[3].push(card)
}
return accumulator
},[[],[],[],[]]);
console.log(cardReducing)
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
function isSass (s){
    if (s.modules.includes('sass')){
        return s
    }
}
console.log(coursesArray.filter(isSass))
function isDocker (d){
    if (d.modules.includes('docker')){
        return d
    }
}
console.log(coursesArray.filter(isDocker))
