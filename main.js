//Задание 1
//если значение попадает в диапазон 1-17 - "Учеба"
//если значение попадает в диапазон 18-64 - "Работа"
//если значение попадает в диапазон 65-100 - "Пенсия"

var age = 17;
// if (1 <= age && age <= 17) {
//     alert ('Учеба');
// }
// else if (18 <= age && age <= 64) {
//     alert('Работа');
// }
// else {
//     alert('Пенсия');
// };

var messege = (1 <= age && age <= 17) ? 'Учеба' : (18 <= age && age <= 64) ? 'Работа' : 'Пенсия';

console.log(messege);

// Создайте массив с числами от 1 до 9. С помощью цикла for и условной инструкции switch выведите в консоль: 1 разработчик,2,3...

// var arr = [1,2,3,4,5,6,7,8,9];
//
// for (var a in arr) {
//     switch (arr[a]) {
//         case 1: console.log(arr[a] + ' разработчик');
//         break;
//         case 2: console.log(arr[a] + ' разработчика');
//         break;
//         case 3: console.log(arr[a] + ' разработчика');
//         break;
//         case 4: console.log(arr[a] + ' разработчика');
//         break;
//         case 5: console.log(arr[a] + ' разработчиков');
//         break;
//         case 6: console.log(arr[a] + ' разработчиков');
//         break;
//         case 7: console.log(arr[a] + ' разработчиков');
//         break;
//         case 8: console.log(arr[a] + ' разработчиков');
//         break;
//         case 9: console.log(arr[a] + ' разработчиков');
//     }
// }
