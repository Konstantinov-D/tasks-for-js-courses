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
let in1 = document.querySelector('.i-1');
// let in2 = document.querySelector('.i-2');
let button = document.querySelector('button');
 

button.onclick = () => {
    let a = in1.value;

if ( a > 1 && a < 32 ) {
    out.innerHTML = '1';
} else if ( a > 33 && a < 43 ) {
    out.innerHTML = '2';
} else if ( a > 44 && a < 64 ) {
    out.innerHTML = '3';
} else {
    out.innerHTML = '0';
}
}























