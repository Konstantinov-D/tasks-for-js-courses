  // ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
  // Task 16
  // Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.


let out = document.querySelector('.out');
let button = document.querySelector('button');


button.onclick = () => {
    ar = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    even = '';
    notEven = '';
    for (let i = 0; i < ar.length; i++) {
      if (ar[i]%2==0){
        even += ar[i] + ' ';
      }else{
        notEven += ar[i] + ' ';
      }
    }
    out.innerHTML = even + '<br>' + notEven;
  }
  




  // Task 1
  // Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1
  
  // Task 2
  // Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2.
  
  // Task 3
  // Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
  
  // Task 4
  // Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
  
  // Task 5
  // Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
  
  // Task 6
  // Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
  
  // Task 7
  // Добавьте в массив ar7 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
  
  // p>
  // ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
  // Task 8
  // Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
  
  // Task 9
  // Выведите последний элемент массива ar9. Вывод последнего элемента - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
  
  // ar9 = [100, 200, 300, 400, 700, 121];
  // Task 10
  // Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
  
  // ar10 = [100, 200, 300, 400, 700, 121];
  // Task 11
  // Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
  
  // ar11 = [2,3,4,5,6,7];
  // Task 12
  // Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
  
  // ar12 = ['test', 'west', 'list', 'class', 'best'];
  // Task 13
  // Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
  
  // ar13 = ['test', 'west', 'list', 'class', 'best'];
  // Task 14
  // Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
  
  // ar14 = [1, 2, 3, 'hello', 66];
  // Task 15
  // Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
  
  // ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
  // Task 16
  // Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
  
  // ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
  // ar16_odd = [];
  // ar16_even = [];
          
  // Task 17
  // Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
  
  // ar17 =  [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
  // Task 18
  // Используя цикл выведите в .out-18 максимальный элемент массива ar18.
  
  // ar18 =  [15,24,13,78,21,4,45,67];
  // Task 19
  // Выведите в .out-19 индекс минимального элемента в массиве ar19
  
  // ar19 =  [15,424,313,78,241,4,45,67]
  // Task 20
  // Выведите в .out-20 сумму элементов в массиве ar20.
  
  //  ar20 =  [4,5,6,7,8,9,10];
  
  // Правила оформления домашних заданий
  
  