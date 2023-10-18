'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
// [1 -> 2 -> 3 -> 4 -> 5] -> 6
//                 |
// [1 <-> 2 <-> 3 <-> 4]

// cb(1) -> cb(2) -> cb(3)

function Node(value) {
  this.value = value
  this.next = null
}

function LinkedList() {
  this.head = null
  this.size = 0
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value)

  if(!this.head) {
    this.head = node
  } else {
    var current = this.head

    while(current.next) {
      current = current.next
    }

    current.next = node
  }

  // this.size++
  this.size += 1
}

LinkedList.prototype.remove = function() {
  //var val = null

  if(!this.head) {
    // val = null
    return this.head // null, false, 0, undefined
  } else if(!this.head.next) { // this.size == 1
    var val = this.head.value
    this.head = null
    this.size--

    // val = current
    return val
  } else {
    var current = this.head

    while(current.next.next) {
      current = current.next
    }

    var val = current.next.value
    current.next = null
    this.size -= 1

    return val
  }

  //return val
}

// LinkedList.prototype.remove = function () {
//   //lista vacia
//   if (!this.head) return null;

//   //lista tiene un nodo
//   var current = this.head;

//   if (!current.next) {
//     var nodeValue = current.value;
//     this.head = null;
//   }

//   //lista tiene más de un nodo
//   else {
//     while (current.next.next) {
//       current = current.next;
//     }
//     var nodeValue = current.next.value;
//     current.next = null;
//   }
//   return nodeValue;
// };

LinkedList.prototype.search = function(arg) {
  var current = this.head

  while(current) {
    if(typeof arg === 'function') {
      if(arg(current.value)) return current.value
    } else {
      if(arg === current.value) return current.value
    }

    current = current.next
  }


  return null // return current.value == null.value

  // if() {
  //   while()
  // } else {
  //   while()
  // }
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
// key              value
// 'instructora', 'Ani'
// 2
// [{}, {}, {'instructora': 'Ani'}, {}, {}]

class HashTable {
  constructor(numBuckets = 35) {
    this.numBuckets = numBuckets;
    this.buckets = []; // new Array(35)
  }

  hash(key) {
    if(typeof key !== 'string') {
      throw new TypeError("Keys must be strings")
    }

    var total = 0 // []

    for(let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
      // total.push(key.charCodeAt(i))
    }

    // [1,2,3,4]
    // return total.reduce((acc, current) => acc + current) % 35
    return total % this.numBuckets // total / 35 => nos quedamos con el resto
  }

  // [{sa: 1, as:2, key:value}] sa, 3 =>  [{sa: 3, as:2, key: value}]
  set(key, value) {
    let bucket = this.hash(key)

    if(!this.buckets[bucket]) {
      this.buckets[bucket] = {
        [key]: value
      }
    } else {
      this.buckets[bucket][key] = value
    }
  }  

  get(key) {
    let bucket = this.hash(key)

    return this.buckets[bucket][key] // === value
  }

  hasKey(key) {
    let bucket = this.hash(key)
    
    return this.buckets[bucket].hasOwnProperty(key)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
