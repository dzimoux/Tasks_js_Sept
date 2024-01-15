// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then((users) => {
    for (let user of users) {
        let div1 = document.createElement('div')
        div1.id = 'bl_div_' + user.id;
        document.body.appendChild(div1)
       let a1 = document.createElement('a')
        a1.href ='./user-details.html?id=' + user.id;
        a1.innerHTML = `User ${user.name} with id - ` + user.id;
        div1.appendChild(a1)
    }

    let divN1 = document.getElementById('bl_div_1')
    let divN2 = document.getElementById('bl_div_2')
    let divN3 = document.getElementById('bl_div_3')
    let divN4 = document.getElementById('bl_div_4')
    let divN5 = document.getElementById('bl_div_5')
    let divN6 = document.getElementById('bl_div_6')
    let divN7 = document.getElementById('bl_div_7')
    let divN8 = document.getElementById('bl_div_8')
    let divN9 = document.getElementById('bl_div_9')
    let divN10 = document.getElementById('bl_div_10')
        let block1 = document.getElementById('bl1')
        let block2 = document.getElementById('bl2')
        let block3 = document.getElementById('bl3')
        let block4 = document.getElementById('bl4')
        let block5 = document.getElementById('bl5')
    block1.append(divN1,divN2)
    block2.append(divN3,divN4)
    block3.append(divN5,divN6)
    block4.append(divN7,divN8)
    block5.append(divN9,divN10)
    }
)

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули





// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)



