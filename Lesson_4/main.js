// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b){
    console.log(a * b)
}
area(3, 6)
// створити функцію яка обчислює та повертає площу кола з радіусом r
let p = 3.14;
function circle(r) {

    let areaC = p * r ** 2;
    return areaC;
}
let o = circle (6);
console.log(o)

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (R,H){
    let areaCyl = 2 * p * R * H;
    return areaCyl;
}
console.log(cylinder(4,7))
// створити функцію яка приймає масив та виводить кожен його елемент
function intake (i){
    for (let j = 0; j < i.length; j++) {
        const iElement = i[j];
        console.log(iElement)
    }

}
let arrOfEl = [2,5,true,'hello']
console.log(intake(arrOfEl))
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph (text){
    document.write(`<div><p>Hey!${text}</p></div>`)

}
let pText = paragraph('How are you?')
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul1 (argum){
    document.write(`<ul>
<li>${argum}</li>

<li>${argum}</li>

<li>${argum}</li>
</ul>`)
}
let liArg = `Wake up`
console.log(ul1(liArg))
// --------------------------------------------
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий/ Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul1 (textLi,numb){
    document.write(`<ul>`)
    for (let i = 0; i < numb; i++) {
        let liVar = `<li>${textLi}</li>`;
        document.write(liVar)
    }
document.write(`</ul>`)
}
ul1('Hey', 7)
// -----------------------------------------------------------------
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitive (z){
    for (let i = 0; i < z.length; i++) {
        const zElement = z[i];

        document.write(
            `<ul>
<li>${zElement}</li>
</ul>`
        )
    }
}
let arrd = [true, 6,'hello']
console.log(primitive(arrd))

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function separBlock(arr2) {
    for (const arr2Element of arr2) {
        document.write(`<div>${arr2Element.name} ${arr2Element.id} ${arr2Element.age}</div>`)
    }

}
let testarr = [{id:3334,
    name: 'Oleh',
    age: 34},

    {id:3534,
        name: 'Olena',
        age: 24},

    {id:2574,
        name: 'Olexandr',
        age: 32}]

console.log(separBlock(testarr))
// створити функцію яка повертає найменьше число з масиву
function smallestNumb (numbArr) {
    for (const numbArrElement of numbArr) {
        if (numbArrElement <= 3){
            console.log(numbArrElement)
        }
    }
}
let arr3 = [5,6,3,7,8,9,10]
console.log(smallestNumb(arr3))
// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10])
function sum(arr) {
    let result = 0;
    for (const arrElement of arr) {
        result = result + arrElement;
    }
    return result
}
let arr4 = [4,6,2,7,8,2]
console.log(sum(arr4))
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr1,index1,index2){
    for (let i = 0; i < arr1.length; i++) {

        if (index1 === 0){
            arr1[i] = arr1[i+1];
            break} else if (index2 === 1) {
            arr1[i+1] = arr1[i];
        }
    }
    return arr1
}
let arr5 = [3,6,44,22]
console.log(swap(arr5,0,1))
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)











// exchange(sumUAH,currencyValues,exchangeCurrency)






// ----------------------------------------------------------------------------------------------------------
// =============================================================================================================


