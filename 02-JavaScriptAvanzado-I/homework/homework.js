// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) { // 8, 9, 10
//    var x = 10;
//    console.log(x); // 10
//    console.log(a); // 8
//    var f = function (a, b, c) { // 8, 9, 10
//     var a = 8
//     var b = 9 
//     var c = 10
//       b = a; // b = 8
//       console.log(b); // 8
//       b = c; // b = 10
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b); // 9
// };
// c(8, 9, 10);
// console.log(b); // 10
// console.log(x); // 1


// console.log(bar); // undefined
// console.log(baz); // undefined
// foo(); // Hola!
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// var baz = 2;

// console.log(bar); // 1
// console.log(baz); // 2

// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor); // Franco

// var instructor = 'Tony';
// console.log(instructor); // Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor); // Franco
//    }
// })(); // IIFE
// console.log(instructor); // Tony

// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    instructor = 'The Flash';
//    pm = 'Reverse Flash';
//    console.log(instructor); // The Flash => The Flash
//    console.log(pm); // Reverse Flash => Reverse Flash
// }
// console.log(instructor); // The Flash => The Flash
// console.log(pm); // Franco => Reverse Flash
// console.error("TEST ERROR")
// console.warn("TEST WARN")

// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // "$4" + 5 => $45
// "4" - 2 // 2
// "4px" - 2 // NaN => Not a Number
// typeof 2 // number
// typeof NaN // Number
// 7 / 0 // Infinity
// {}[0] // undefined
// parseInt("09") // 9
// 5 && 2 // 2 => true
// 0 && 2 // 0 => false
// 2 && 0 // 0 => false
// 2 && 5 // 5 => true
// 5 || 0 // 5 => true
// 0 || 5 // 5 => true
// false || 0 // 0 => false
// [3]+[3]-[10] // 23
// "1" + 1 // "11" => concatenar / sumar
// "2" - 1 // 1 => resta
// console.log([2, 3] + [4] + [5, 6]) // "2,3" + "4" + "5,6"
// console.log([2, 3] - [4] - [5, 6]) // NaN
// console.log(typeof []) // object
// (A(BC *) +) => REVISAR
// 3>2>1 // false
// 3 > 2 // true
// true > 1 // true => 1 // false
// 3 > 2 > 0 // true
// 3 < 2 < 1 // true
// 3 < 2 // false
// false < 1
// console.log([] == ![]) => [] !== []
// var obj = {}
// obj == obj // true
// {} == {} // false

// function test() {
//     console.log(a); // undefined
//     console.log(foo()); // 2

//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
 
// test();

// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }

//    return snack;
// }

// console.log(getFood(false)) // undefined

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname()); // Aurelio De Rosa

// var test = obj.prop.getFullname;

// console.log(test()); // undefined

// function printing() {
//     console.log(1);
//     setTimeout(function () {
//        console.log(2);
//     }, 1000);
//     setTimeout(function () {
//        console.log(3);
//     }, 0);
//     console.log(4);
    
//     setTimeout(function () {
//         console.log(5);
//      }, 20000);
//  }
 
//  printing();

 // 1 - 4 - 3 - 2
 // 2 - 3