// let fname = document.querySelector('.input-name'),
//     lname = document.querySelector('.input-last'),
//     button = document.querySelector('button'),
//     div = document.getElementsByClassName('.out');
//     input = document.get

//     fname.style.border = '2px solid red';
//     lname.style.border = '2px solid red';

// //     fname.onclick = function () {
// //         fname.value = " ";
// // } 
// //     lname.onclick = function () {
// //         lname.value = " ";
// // }
//     button.onclick = function () {
//     let a = fname.value;
//     let b = lname.value;
//     a = parseInt(a);
//     b = parseInt(b);
//     console.log(a + b);
// }



// let out = document.querySelector('.out');
// // let out2 = document.querySelector('.out2');

// let button = document.querySelector('button');


// button.onclick = () => {
    
    
//     out.innerHTML = '<input type="text" class="i-1"><button class="bt2">push</button>';
//     let bt2 = document.querySelector('.bt2');
//     let input = document.querySelector('.i-1')
//     bt2.onclick = () => {
//         console.log(input.value);
//     }
// }



// Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:

// 77_74_71_68_65_62_ ... _38_35_

// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.


let out = document.querySelector('.out');
let button = document.querySelector('button');

button.onclick = () => {
    let a = '';
    for (let i = 25; i >= 7; i-- ) {
        
        a += i + ' ';
          
    }
    out.innerHTML = a;
}















// Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:

// 2 4 6 ... 122

// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

// Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:

// 25 24 23 22 . . 7

// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

// Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:

// 77_74_71_68_65_62_ ... _38_35_

// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
