'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array

  const pivotIndex = Math.floor(Math.random() * array.length) // array[0]
  var pivot = array.splice(pivotIndex, 1)[0] // array.splice(pivotIndex, 1)[0]
  var menores = []
  var mayores = []
  
  // for(let i = 1; i < array.length; i++) {
  //    if (array[i] === pivot) {
  //      continue
  //    }

  //   if(array[i] > pivot) {
  //     mayores.push(array[i])
  //   } else {
  //     menores.push(array[i])
  //   }
  // }

  for(const x of array) {
    if(x < pivot) {
      menores.push(x)
    } else {
      mayores.push(x)
    }
  }
  
  mayores = quickSort(mayores)
  menores = quickSort(menores)

  // return quickSort(menores).concat(pivot).concat(quickSort(mayores))
  return [...menores, pivot, ...mayores]
}

// function mergeSort(array) {
//   // Implementar el método conocido como mergeSort para ordenar de menor a mayor
//   // el array recibido como parámetro
//   // Devolver el array ordenado resultante
//   // Tu código:
//   if(array.length <= 1) return array

//   var middle = Math.floor(array.length / 2)
//   var right = array.slice(middle)
//   var left = array.slice(0, middle)

//   var rightOrderer = mergeSort(right)
//   var leftOrderer = mergeSort(left)

//   return merge(leftOrderer, rightOrderer)
//   //okey probemos ahora
// }

// function merge(left, right) { // [324, 756, 1000] [] => [1, 3, 4, 56].concat([324, 756, 1000]).concat([])
//   var result = []

//   while(left.length && right.length) {
//     if(left[0] > right[0]) {
//       result.push(right.shift())
//     } else {
//       result.push(left.shift())
//     }
//   } 


//   return result.concat(left).concat(right)
// }

function mergeSort(array) {
  let length
  let left = []
  let right = []

  if(array.length <2){ 
    return array;
  } else {
    length = Math.floor(array.length / 2)
    left = array.slice(0, length)
    right = array.slice(length, array.length)
    
    left = mergeSort(left)
    right = mergeSort(right)
  }
  
  array = []
  while(left.length && right.length) {
    if(left[0] < right[0]){
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }

  array = array.concat(left, right)
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
