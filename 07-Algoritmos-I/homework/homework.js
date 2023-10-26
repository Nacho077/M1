'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}

// [5, 1, 4, 2, 8]
//           |
// [1, 4, 2, 5, 8]
//           | swapped = true
// [1, 2, 4, 5, 8]
//           | swapped = false

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var swapped = false
  var last = array.length - 1

  do {
    swapped = false
    for(let i = 0; i < last; i++) {
      if(array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
    last--

  } while(swapped)

  // for(let i = 0; i < array.length; i++){
  //   for(let j = 0; j < array.length - i - 1; j++){ // 1
  //     if(array[j] > array[j+1]){
  //       let aux = array[j];
  //       array[j] = array[j+1];
  //       array[j+1] = aux;
  //     }
  //   }
  // }

  return array
}




function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
