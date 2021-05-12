// РЕКУРСИЯ

// функция вызывает саму себя

let a = 0;

function rec() {
    a = a + 1;
    console.log(a);
    if (a > 10){
        return a;
    }
    rec();
}
rec();