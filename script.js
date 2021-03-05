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



let out = document.querySelector('.out');
// let out2 = document.querySelector('.out2');

let button = document.querySelector('button');


button.onclick = () => {
    
    
    out.innerHTML = '<input type="text" class="i-1"><button class="bt2">push</button>';
    let bt2 = document.querySelector('.bt2');
    let input = document.querySelector('.i-1')
    bt2.onclick = () => {
        console.log(input.value);
    }
}
























