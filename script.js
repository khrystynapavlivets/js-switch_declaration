/*Завдання 1

Написати розв’язок нижче описаного завдання за допомогою конструкції switch:

1. Користувач вводить число в prompt

2. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.

3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.*/

// let num = +prompt("write number from 1 to 12");
// switch (num) {
//   case 3:
//   case 4:
//   case 5:
//     alert("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Літо");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Осінь");
//     break;
//   case 12:
//   case 1:
//   case 2:
//     alert("Зима");
//     break;
//   default:
//     alert("Неможливо визначити пору року");
//     break;
// }
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

/* Завдання 2

Написати розв’язок нижче описаного завдання за допомогою function declaration:

1. Створити функцію яка буде приймати одне число.

2. В середині функції перевіряємо чи це число є простим.

3. Після перевірки виводимо повідомлення в console.log().*/

// let num = +prompt("write number");

// function primeNumber(num) {
//   if (num <= 2) {
//     return ` не є простим`;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {

//     if (num % i === 0) {
//       return ` не є простим`;
//     }
//   }
//   return ` є простим`;
// }
// console.log(`Число - ${num}`, primeNumber(num));
// console.log(Math.sqrt(num));

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

/* Завдання 3

Написати розв’язок нижче описаного завдання за допомогою function declaration:

1. Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.

2. Кількість параметрів у функції може бути від 2х і більше.

3. Забороняється використовувати Math.max().

Приклад роботи:

1. max(5,-2) – має повернути 5.

2. max(5,-2, 30, 6) – має повернути 30 */

// let num = 9;

function num() {
  let maxNum = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if ( arguments[i]>maxNum) {
      maxNum = arguments[i];
    }
  }
console.log(`Максимальне число - ${maxNum}`);
}
num(9, 5, 90, 0, 0.8,6701,8,-666);
