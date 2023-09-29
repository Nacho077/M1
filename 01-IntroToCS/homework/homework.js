'use strict';

function BinarioADecimal(num) {
   // return parseInt(num, 2)
   // 10011 = 1 * 2 ^ 0 + 0 * 2 ^ 1
   // var arr = num.split("").reverse().join("") => "232".split("") => [2, 3, 2].join("") => "232"
   var res = 0
   var pos = 0

   // "hola".length = 4 => "Hola"[4] => undefined
   // for(var i = num.length - 1; i >= 0; i--) {
   //    res += Math.pow(2, pos) * num[i]
   //    pos++
   // }

   // [1, 2, 3].map(function(item, i){
   //    return item * 2
   // }) => [2, 4, 6]

   for(var i = 0; i < num.length; i++) {
      var digito = Number(num[i])
      var posicion = num.length - i - 1
      res += digito * Math.pow(2, posicion)
   }

   return res
}

function DecimalABinario(num) { // "0"
   // 8 / 2 => 4 ; 0
   // 4 / 2 => 2 ; 0
   // 2 / 2 => 1 ; 0
   // 1 / 2 => 0 ; 1
   if (num == 0) return 0
   var bin = ""

   while(num > 0) {
      var resto = num % 2
      num = Math.floor(num / 2)
      // bin.unshift(resto)
      bin = resto + bin
   }

   return bin
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
