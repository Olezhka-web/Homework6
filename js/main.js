// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// let array = [1 , 2, 3, 4, 5];
// console.log(array);

// - з 5 стічкових значень
// let array = ['Nice' , 'Fine', 'Super', 'Amazing', 'Beautiful'];
// console.log(array);

// - з 5 значень стрічкового, числового та булевого типу
// let array = ['OWU', 'JS', 1, 5, true];
// console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let b = [];
// b[0] = 'Hello world';
// b[1] = 'OWU';
// b[2] = 'Hi';
// console.log(b);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i = 0; i < 10; i++){
//     document.write('<div>Hello</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let i = 0; i < 10; i++){
//        document.write(`<div>Hello ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while(i < 20){
//     document.write('<h1>Hello world</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
//  while(i < 20){
//      document.write(`<h1>Hello world ${i}</h1>`);
//      i++;
//  }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let a = ['OWU', 'Car', 'Nice', 'JS', 'HTML', 'CSS', 'JQUERY', 'Angular', 'React', 'Vue'];
//    for(let i = 0; i < a.length; i++){
//      console.log(a[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let a = ['OWU', 1, 3, 'JS', 'HTML', true, 8, 'Angular', false, 'Vue'];
//     for(let i = 0; i < a.length; i++){
//       console.log(a[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let a = ['OWU', 1, 3, 'JS', false, true, 8, 'Angular', false, 'Vue'];
//      for(let i = 0; i < a.length; i++){
//          if(typeof (a[i]) === "boolean") {
//              console.log(a[i]);
//          }
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let a = ['OWU', 1, 3, 'JS', false, true, 8, 'Angular', false, 'Vue'];
// for(let i = 0; i < a.length; i++){
//     if(typeof (a[i]) === "number") {
//         console.log(a[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let a = ['OWU', 1, 3, 'JS', false, true, 8, 'Angular', false, 'Vue'];
// for(let i = 0; i < a.length; i++){
//     if(typeof (a[i]) === "string") {
//         console.log(a[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let a = [];
// a[0] = 'OWU';
// a[1] = 1;
// a[2] = 3;
// a[3] = 'JS';
// a[4] = false;
// a[5] = true;
// a[6] = 8;
// a[7] = 'Angular';
// a[8] = false;
// a[9] = 'Vue';
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 10; i++){
//     console.log(i);
//     document.write('<br>' + i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++){
//     console.log(i);
//     document.write('<br>' + i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i+=2){
//     console.log(i);
//     document.write('<br>' + i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i+=2){
//     console.log(i);
//     document.write('<br>' + i);
// }
// Або якщо i = 1;
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//     console.log(i);
//     document.write('<br>' + i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i+=2){
//     console.log(i);
//     document.write('<br>' + i);
// }
// Або якщо i = 1;
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//         document.write('<br>' + i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i < 100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//         document.write('<br>' + i);
//     }
// }
// Або якщо i = 1;
// for(let i = 1; i <= 100; i+=2){
//         console.log(i);
//         document.write('<br>' + i);
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for(let i = 1; i<=2; i++){
//     for(let j = 0; j<=60; j++){
//         console.log('Sec=' + j);
//     }
//     console.log('Min=' + i);
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for(let i = 1; i<=3; i++){
//     for(let j = 1; j<=60; j++){
//         for(let z = 0; z <= 60; z++){
//             console.log('Sec = ' + z);
//         }
//         console.log('Min=' + j);
//     }
//     console.log('Hour=' + i);
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let newArray = [];
// for(let i = 0; i < array.length; i++){
//  newArray+=array[i];
// }
// console.log(newArray);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let newArray = [];
// let i = 0;
// while (i < array.length){
//     newArray+=array[i];
//     i++;
// }
// console.log(newArray);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let newArray = [];
// for(let value of array){
//     newArray+=value;
// }
// console.log(newArray);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let newArray = [];
// for(let value of array){
//     newArray+=value;
// }
// console.log(newArray);
//
// =================
// =================
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < array.length){
//     console.log(array[i]);
//     i++;
// }

//     2. перебрати його циклом for
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < array.length){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < array.length; i++){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < array.length){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     console.log(array[i]);
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let newArray = [];
// for(let i = array.length -1; i >= 0; i--){
//     console.log(array[i]);
//     newArray.push(array[i]);
// }
// console.log(newArray);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = array.length - 1;
//     while(i >=0){
//         console.log(array[i]);
//         i--;
//     }
//
//////////////////////////////////////////////////////
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = array.length -1; i >= 0; i--){
//     console.log(array[i]);
// }
//////////////////////////////////////////////////////
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = array.length - 1;
// while(i >=0){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
//     i--;
// }
//////////////////////////////////////////////////////
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = array.length -1; i >= 0; i--){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
// }
//////////////////////////////////////////////////////
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = array.length - 1;
// while(i >=0){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
//     i--;
// }
//////////////////////////////////////////////////////
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = array.length -1; i >= 0; i--){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
// }
//////////////////////////////////////////////////////
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = array.length -1; i >= 0; i--){
//     if(array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     console.log(array[i]);
// }
// console.log(array);

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for(let i = 0; i < 100; i++){
//     if(i % 2 === 0) {
//         array.push(i);
//     }
// }
// console.log(array);

// - заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// for(let i = 0; i < 100; i++){   //У цьому циклі також можна i+=2 написати і не викорис if, так як i = 0;
//     if(i % 2 !== 0) { //
//         array.push(i);
//     }
// }
// console.log(array);
//
//
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0) {
//         array.push(i);
//     }
// }
// console.log(array);

// 2. заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0) {
//         array.push(i);
//     }
// }
// console.log(array);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let array = [];
// for(let i = 0; i < 10; i++){
//     array.push(Math.random());
// }
// console.log(array);

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let array = [];
// for(let i = 0; i < 10; i++){
//     array.push(Math.random()*732+8);
// }
// console.log(array);

// 2. вывести на консоль  каждый третий елемент
// let array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.random() * 732 + 8);
//     }
// for(let j = 0; j < array.length; j++){
//     if(j % 3 === 0) {
//         console.log(array[j]);
//     }
// }
//     console.log(array);

// 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 732 + 8));
// }
// for(let j = 0; j < array.length; j++){
//     if(j % 3 === 0 && array[j] % 2 === 0) {
//         console.log(array[j]);
//     }
// }
// console.log(array);

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let array = [];
// let newArray = [];
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 732 + 8));
// }
// for(let j = 0; j < array.length; j++){
//     if(j % 3 === 0 && array[j] % 2 === 0) {
//         newArray.push(array[j]);
//         console.log(array[j]);
//     }
// }
// console.log(array);
// console.log(newArray);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 732 + 8));
// }
// for(let j = 0; j < array.length; j++){
//     if(array[j+1] % 2 === 0) {
//         console.log(array[j]);
//     }
// }
// console.log(array);

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let array = [100,250,50,168,120,345,188];
// let sum = 0;
// let result = 0;
// for(let i = 0; i < array.length; i++){
//      sum += array[i];
//      result = sum / array.length;
// }
// console.log(sum);
// console.log(result);

//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// let newArray = [];
// for (let i = 0; i < 10; i++) {
//     array.push((Math.floor(Math.random() * 732 + 8))*5);
//     newArray.push(array[i]);
// }
// console.log(array);
// console.log(newArray);

// Або можна вже з готовим масивом з рандом значеннями
// let array = [1, 2, 3, 4, 5];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i]*5);
// }
// console.log(array);
// console.log(newArray);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let array = ['owu', 1, 8, false, 'nice', true, 7, false, 10];
// let newArray = [];
// for(let i = 0; i < array.length; i++){
//     if(typeof array[i] === "number"){
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray);