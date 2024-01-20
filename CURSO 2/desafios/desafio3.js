// Crea una lista vacía llamada "listaGenerica"
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion"
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega elementos a la lista "lenguagesDeProgramacion"
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función que muestra en la consola todos los elementos de la lista "lenguagesDeProgramacion"
function mostrarLenguajes() {
  console.log("Lenguajes de programación:");
  for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
    console.log(lenguajesDeProgramacion[i]);
  }
}

// Función que muestra en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso
function mostrarLenguajesInverso() {
  console.log("Lenguajes de programación en orden inverso:");
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}

// Función que calcula el promedio de los elementos en una lista de números
function calcularPromedio(lista) {
  const suma = lista.reduce((total, numero) => total + numero, 0);
  return suma / lista.length;
}

// Función que muestra en la consola el número más grande y el número más pequeño en una lista
function encontrarExtremos(lista) {
  const maximo = Math.max(...lista);
  const minimo = Math.min(...lista);
  console.log("Número más grande: " + maximo);
  console.log("Número más pequeño: " + minimo);
}

// Función que devuelve la suma de todos los elementos en una lista
function sumarElementos(lista) {
  return lista.reduce((total, numero) => total + numero, 0);
}

// Función que devuelve la posición en la lista donde se encuentra un elemento
// pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(elemento, lista) {
  const posicion = lista.indexOf(elemento);
  return posicion !== -1 ? posicion : -1;
}

// Función que recibe dos listas de números del mismo tamaño y devuelve una nueva lista
// con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
  return lista1.map((valor, indice) => valor + lista2[indice]);
}

// Función que recibe una lista de números y devuelve una nueva lista con el cuadrado de cada número
function cuadradoDeLista(lista) {
  return lista.map(numero => numero ** 2);
}

// Ejemplos de uso
mostrarLenguajes();
mostrarLenguajesInverso();
console.log("Promedio: " + calcularPromedio([1, 2, 3, 4, 5]));
encontrarExtremos([10, 5, 8, 20, 3]);
console.log("Suma: " + sumarElementos([1, 2, 3, 4, 5]));
console.log("Posición de 'Ruby': " + encontrarPosicion('Ruby', lenguajesDeProgramacion));
console.log("Lista suma uno a uno: " + sumarListas([1, 2, 3], [4, 5, 6]));
console.log("Cuadrados de la lista: " + cuadradoDeLista([2, 3, 4]));
