// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let blocks = [
        {name: 'Mariia'},
        {name: 'Olya'},
        {name: 'Nazar'},
        {name: 'Bohdan'},
        {name: 'Pavlo'},
        {name: 'Petro'},
        {name: 'Ruslan'},
        {name: 'Liudmyla'},
        {name: 'Tetiana'},
        {name: 'Roman'}

]

for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    document.write(`<div>${block.name}</div>`)
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    document.write(`<div>${block.name}</div>
<p>With index ${i}</p>`)
}
// ---------------------------------------------------
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let arrayNum2 = [
    {text: 'PPPPP'},
    {text: 'PPwwP'},
    {text: 'PPPweP'},
    {text: 'PPqwr'},
    {text: 'PPPtwqP'},
    {text: 'PPPPtee'},
    {text: 'PPwerqP'},
    {text: 'PPwetP'},
    {text: 'PPwewe'},
    {text: 'qrqwr'},
    {text: 'gergegr'},
    {text: 'Pergerg'},
    {text: 'ergergP'},
    {text: 'gergeergP'},
    {text: 'iyuit'},
    {text: 'Ptytyj'},
    {text: 'Prtjrtr'},
    {text: 'Pykyuyuk'},
    {text: 'Ptyjtyj'},
    {text: 'werwwPP'},
    {text: 'vzcvdbPP'},

]
let i = 0
while (i < arrayNum2.length){
    document.write(`<h1>${arrayNum2[i].text} with index ${i}</h1>`);
    i++;
}
// ----------------------------------------------------------------
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let j = 0; j < listOfItems.length; j++) {
    const listOfItem = listOfItems[j];
   document.write(
      `<ul>
           <li>${listOfItem}</li>
       </ul>`)
}
// ----------------------------------------------------
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let j = 0; j < products.length; j++) {
    const product = products[j];
    document.write(` <div class="product-card">
        <h3 class="product-title">TITLE - ${product.title} Price - ${product.price}</h3>
        <img src="${product.image}" alt="product" class="product-image">
</div>`)
}

// ------------------------------------------------------------------
// Є масив. за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let usersO = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true} ]


for (let k = 0; k < usersO.length; k++) {
    const userO = usersO[k];

    if(userO.status === true) {
        document.write(`<div>${userO.name}</div> `)
    } else if  (userO.status === false) {

        document.write(`<div>${userO.name}</div> `)}
    else if  (userO.age > 30) {

        document.write(`<div>${userO.age}</div> `)}
}