// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

let out = document.querySelector('.out');
let button = document.querySelector('button');
let inp = document.querySelector('input');

button.onclick = () => {

  let d = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9],
    [11, 12, 13, 14]
  ];
  for (i = 0; i < d.length; i++) {
    for (k = 0; k < d[i].length; k++) {
      if(d[i][k]%2 != 0){
      console.log(d[i][k]);
      }
    }
  }
}






// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива a1. Возвратите это значение.

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение my из массива a3. Возвратите это значение.

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение go из массива a4. Возвратите это значение.

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

// Task 9
// При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 значения из массива a9, которые больше нуля. Используем цикл. Вывод - через пробел.

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна вывести в out-10 значения из массива a10, которые являются строкой. Используем цикл. Вывод - через пробел.

// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.

// Task 12
// Дан массив a12 который моделирует шахматную доску. Используя цикл выведите в out-12 единицы из этого массива. Все действия в функции f12. Функция запускается при нажатии на b12. Вывод через пробел.

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна вывести в out-14 длины вложенных в a14 массивов. Через пробел.

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.

// Task 16
// Впишите в переменную a16 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

// Task 17
// Впишите в переменную a17 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

// Task 18
// Впишите в переменную a18 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

// Task 19
// Впишите в переменную a19 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

// Task 20
// Впишите в переменную a20 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;