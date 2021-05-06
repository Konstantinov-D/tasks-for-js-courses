// task 10

let card = '';
card = {
    "apple": 3,
    "grape": 2
}
const column = ['Название товара', ' ', 'Количество'];
let out = document.querySelector('.out-10');

function t10() {
    localStorage.setItem('card', JSON.stringify(card));
    t11();
}

function t11() {
    out.innerHTML = '';
    let c = localStorage.getItem('card', JSON.stringify(card));
    c = JSON.parse(c);
    let table = document.createElement('table');
    let sumGoods = 0;
    // формирование строки названия колонок
    let tr = document.createElement('tr');
    for (let j = 0; j < column.length; j++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = column[j];
    }
    table.appendChild(tr);
    // формирование строк таблицы вывода массива card
    for (let key in card) {
        let tr = document.createElement('tr');
        for (let k = 0; k < 4; k++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            // первая колонка таблицы - название товара
            if (k == 0) {
                td.innerHTML = key;
            }
            // вторая колонка таблицы - кнопка "+"
            if (k == 1) {
                let btnPlus = document.createElement('button');
                td.appendChild(btnPlus);
                btnPlus.innerHTML = '+';
                btnPlus.classList.add('btnPlus');
                btnPlus.setAttribute('data', [key]);
            }
            // третья колонка таблицы - количество товара
            if (k == 2) {
                td.innerHTML = card[key];
            }
            // четвертая колонка таблицы - кнопка "-"
            if (k == 3) {
                let btnMinus = document.createElement('button');
                td.appendChild(btnMinus);
                btnMinus.innerHTML = '-';
                btnMinus.classList.add('btnMinus');
                btnMinus.setAttribute('data', [key]);
            }
        }
        table.appendChild(tr);
    }
    // формирование строки footer
    let trFoot = document.createElement('tr');
    for (let j = 0; j <= 2; j++) {
        let tdFoot = document.createElement('td');
        tdFoot.classList.add('foot');
        trFoot.appendChild(tdFoot);
        if (j == 1) {
            tdFoot.innerHTML = 'Общее количество';
        }
        if (j == 2) {
            for (let key in card) {
                sumGoods += card[key];
            }
            tdFoot.innerHTML = sumGoods;
        }
        table.appendChild(trFoot);
    }
    out.appendChild(table);
    // повесим событие на все кнопки "+"
    let btnsPlus = document.querySelectorAll('.btnPlus');
    for (let i = 0; i < btnsPlus.length; i++) {
        btnsPlus[i].onclick = function () {
            let sumPlus = card[this.getAttribute('data')] + 1;
            card[this.getAttribute('data')] = sumPlus;
            console.log(card);
            t10();
        }
    }
    // повесим событие на все кнопки "-"
    let btnsMinus = document.querySelectorAll('.btnMinus');
    for (let i = 0; i < btnsMinus.length; i++) {
        btnsMinus[i].onclick = function () {
            let sumMinus = card[this.getAttribute('data')] - 1;
            if (sumMinus == -1) {
                delete card[this.getAttribute('data')];
                return t10();
            }
            else {
                card[this.getAttribute('data')] = sumMinus;
                t10();
            }
        }
    }
    if (sumGoods == 0) {
        localStorage.removeItem('card');
        table.innerHTML = 'Корзина пуста';
    }
}
document.querySelector('.b-10').onclick = t10;











/* <p><b>Task 1.</b></p>
            <p>Создайте функцию t1 которая записывает в LS ключ 5 со значением 11. Проверьте что происходит при
                повторном вызове функции. Запускается ф-я по кнопкуе b-1. </p>
            <button class="button-primary b-1">Task-1</button>

            <div class="out-1">
            </div>
        </section>

        <section>
            <p><b>Task 2.</b></p>
            <p> Создайте функцию t2 которая записывает в LS массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при
                повторном вызове функции. Запускается ф-я по кнопкуе b-2.
            </p>
            <button class="button-primary b-2">Task-2</button>
            <div class="out-2">
            </div>
        </section>

        <section>
            <p><b>Task 3.</b></p>
            <p> При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел
                значение перенос строки. </p>
            <button class="button-primary b-3">Task-3</button>
            <div class="out-3">
            </div>
        </section>

        <section>
            <p><b>Task 4.</b></p>
            <p>Создайте функцию t4 которая записывает в LS массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что
                происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.</p>
            <button class="button-primary b-4">Task-4</button>
            <div class="out-4">
            </div>
        </section>

        <section>
            <p><b>Task 5.</b></p>
            <p> При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел
                значение перенос строки. </p>
            <button class="button-primary b-5">Task-5</button>

            <div class="out-5">
            </div>
        </section>

        <section>
            <p><b>Task 6.</b></p>
            <p>Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6</p>
            <button class="button-primary b-6">Task-6</button>

            <div class="out-6">
            </div>
        </section>

        <section>
            <p><b>Task 7.</b></p>
            <p> Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда
                пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с
                ключем a7.</p>
            <div class="form-control">
                <label>Введите значение</label>
                <input type="text" placeholder="Enter some info" class="i-7">
            </div>
            <button class="button-primary b-7">Task-7</button>

            <div class="out-7">
            </div>
        </section>

        <section>
            <p><b>Task 8.</b></p>
            <p>Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется
                в LS с ключем a7. Использовать массив из предыдущего задания.</p>

            <button class="button-primary b-8">Task-8</button>

            <div class="out-8">
            </div>
        </section>

        <section>
            <p><b>Task 9.</b></p>
            <p>Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении
                radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если
                есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. </p>
            <fieldset>
                <legend>Выбери цвет</legend>
                <div class="form-control">
                    <label><input type="radio" name="rb-9" value="#fff">fff</label>
                </div>
                <div class="form-control">
                    <label><input type="radio" name="rb-9" value="#c0c0c0">c0c0c0</label>
                </div>
                <div class="form-control">
                    <label><input type="radio" name="rb-9" value="#555">555</label>
                </div>
            </fieldset>
            <div class="out-9">
            </div>
        </section>

        <section>
            <p><b>Task 10.</b></p>
            <p>Проект. Дана переменная cart - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют cart в LS.
            </p>

            <p>Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат - название
                товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто
                добавьте ее вызов в нужные функции).</p>
            <p>Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество
                товаров в cart, обновляйте LS, выводите на страницу.</p>
            <p>Добавьте в таблицу footer который считает общее количество товара.</p>
            <p>Добавьте функцию t13, которая при загрузке страницы проверяет наличие cart в LS и если есть -выводит его
                на страницу. Если нет - пишет корзина пуста.</p>
            <pre>
const card = {
    'apple': 3,
    'grape': 2
}

</pre>

            <button class="button-primary b-10">Card</button>
            <div class="out-10">
            </div>
        </section>



    </div>

    <script src="unit_23.js"></script>
</body>

</html>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About */
