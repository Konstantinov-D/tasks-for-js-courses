//Task 9.</b></p>
/* <p>Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши -
меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения?</p>
<div>

<div class="div-9 block">
    <img src="img/1.png" alt="">
</div>
<div class="out-9">
</div> */


let divv = document.querySelector('.div-1');

divv.onclick = () => {
    document.querySelector('.div-1 img').src = "img/2.png";
}





/* <h1>Unit 19. События мыши</h1>

<section>
    <p><b>Task 1.</b></p>
    <p>Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить
        на экран содержимое блока (только текст). Вывод осуществляется в out-1. </p>
    <div class="block div-1">task-1</div>
    <div class="out-1">
    </div>
</section>

<section>
    <p><b>Task 2.</b></p>
    <p>Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна
        возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также,
        выводите на экран результат. Вывод осуществляется в out-2.</p>
    <div class="block div-2">task-2</div>
    <div class="out-2">
    </div>
</section>

<section>
    <p><b>Task 3.</b></p>
    <p>Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px.
        Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. </p>
    <div class="block div-3">task-3</div>
    <div class="out-3">
    </div>
</section>

<section>
    <p><b>Task 4.</b></p>
    <p>Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4.
        Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в
        out-4. </p>
    <div class="block div-4">task-4</div>
    <div class="out-4">
    </div>
</section>

<section>
    <p><b>Task 5.</b></p>
    <p>Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс
        active если он есть и добавляется если такого класса нет. </p>
    <div class="block div-5 active">task-5</div>
    <div class="out-5">
    </div>
</section>

<section>
    <p><b>Task 6.</b></p>
    <p> Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 если он
        показан и
        показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide </p>
    <div>

        <div class="block div-6">task-6</div>
        <ul class="ul-6">
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
        <div class="out-6">
        </div>
</section>

<section>
    <p><b>Task 7.</b></p>
    <p>Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При
        повторном клике - удаляйте.</p>
    <div>

        <div class="block div-7">task-7</div>
        <div class="out-7">
        </div>
</section>

<section>
    <p><b>Task 8.</b></p>
    <p>Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе
        отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран.</p>
    <div>

        <div class="form-control">
            <label>
                <input type="checkbox" class="ch-8"> включить / выключить
                контекстное меню
            </label>
        </div>
        <div class="out-8">
        </div>
</section>

<section>
    <p><b>Task 9.</b></p>
    <p>Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши -
        меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения?</p>
    <div>

        <div class="div-9 block">
            <img src="img/1.png" alt="">
        </div>
        <div class="out-9">
        </div>
</section>

<section>
    <p><b>Task 10.</b></p>
    <p>Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter) -
        меняйте изображение на 2.png.</p>
    <div>

        <div class="div-10 block">
            <img src="img/1.png" alt="">
        </div>
        <div class="out-10">
        </div>
</section>


<section>
    <p><b>Task 11.</b></p>
    <p>Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter) -
        меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. </p>
    <div>

        <div class="div-11 block">
            <img src="img/1.png" alt="">
        </div>
        <div class="out-11">
        </div>
</section>

<section>
    <p><b>Task 12.</b></p>
    <p>Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши -
        добавляйте ему класс active. </p>
    <div>

        <div class="div-12 block">
            task 12
        </div>
        <div class="out-12">
        </div>
</section>


<section>
    <p><b>Task 13.</b></p>
    <p> Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши -
        добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active.
    </p>
    <div>

        <div class="div-13 block">
            task 13
        </div>
        <div class="out-13">
        </div>
</section>

<section>
    <p><b>Task 14.</b></p>
    <p> Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое,
        при клике добавляем блоку div-14 класс active.</p>
    <div>
        <button class="b-14 button-primary">Task 14</button>
        <div class="div-14 block">
            task 14
        </div>
        <div class="out-14">
        </div>
</section>

<section>
    <p><b>Task 15.</b></p>
    <p>Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте
        число внутри на 1.</p>
    <div>

        <div class="div-15 block">
            1
        </div>
        <div class="out-15">
        </div>
</section>

<section>
    <p><b>Task 16.</b></p>
    <p>Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте
        ширину блока на 1px. </p>
    <div>

        <div class="div-16 block">
            task 16
        </div>
        <div class="out-16">
        </div>
</section>

<section>
    <p><b>Task 17.</b></p>
    <p>Дано 2 кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые
        включают и отключают событие move в задании 16. </p>
    <div>

        <button class="b-17_on button-primary">On</button>
        <button class="b-17_off button-primary">Off</button>

        <div class="out-17">
        </div>
</section>

<section>
    <p><b>Task 18.</b></p>
    <p>Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при
        событии onmouseenter. </p>

    <div class="div-18 block">
        task 18
    </div>
    <div class="out-18">
    </div>
</section>

<section>
    <p><b>Task 19.</b></p>
    <p> Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout.
    </p>

    <div class="div-19 block task-19-block">
        task 19
    </div>
    <div class="out-19">
    </div>
</section>

<section>
    <p><b>Task 20.</b></p>
    <p> Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии
        mousemove внутри progress.
    </p>
    <progress max="100" value="10"> */