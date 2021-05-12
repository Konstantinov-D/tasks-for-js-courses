// РЕКУРСИЯ

// функция вызывает саму себя

let offset = 0;

function move() {
    offset = offset + 5;
    document.querySelector(".test").style.left = offset + "px";
    if (offset > 200) {
        return true;
    }
    setTimeout(move, 500);
}
document.querySelector("button").onclick = move;