// ЗАМЫКАНИЯ

// функция видит переменные только внутри, чтобы никто не изменил переменные во время правки

function t1(){
    let a = 0;
    return function () {
        a = a + 1;
        return a;
    }
}

let b = t1();
console.log(b);
console.log(b());
console.log(b());
console.log(b());
console.log(b());