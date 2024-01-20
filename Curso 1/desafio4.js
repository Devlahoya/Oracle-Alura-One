// Mensaje de bienvenida
console.log("¡Bienvenido!");

// Mostrar un mensaje con el nombre utilizando console.log
let nombre = "Hector Martinez";
console.log(`¡Hola, ${nombre} !`);

// Mostrar un mensaje con el nombre utilizando alert
let nombreAlert = "Hector Martinez";
alert(`¡Hola, ${nombre} !`);

// Utilizar prompt para preguntar por el lenguaje de programación favorito
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`¡Tu lenguaje favorito es: ${lenguajeFavorito} !`);

// Realizar la suma de dos valores y mostrar el resultado
let valor1 = 5;
let valor2 = 7;
let resultadoSuma = valor1 + valor2;
console.log( `La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// Realizar la resta de dos valores y mostrar el resultado
let valorResta1 = 10;
let valorResta2 = 4;
let resultadoResta = valorResta1 - valorResta2;
console.log(`La suma de ${valorResta1} y ${valorResta2} es igual a ${resultadoResta}.`);

// Verificar la edad del usuario y mostrar un mensaje
let edadUsuario = prompt("Ingrese su edad:");
if (edadUsuario >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Verificar si un número es positivo, negativo o cero
let numeroVerificar = prompt("Ingrese un número:");
if (numeroVerificar > 0) {
  console.log("El número es positivo.");
} else if (numeroVerificar < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// Usar un bucle while para mostrar números del 1 al 10
let contadorWhile = 1;
while (contadorWhile <= 10) {
  console.log(contadorWhile);
  contadorWhile++;
}

// Determinar si una nota es aprobada o reprobada
let notaAlumno = 8;
if (notaAlumno >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// Generar un número aleatorio
let numeroAleatorio = Math.random();
console.log("Número aleatorio: " + numeroAleatorio);

// Generar un número entero entre 1 y 10
let numeroEntero10 = Math.floor(Math.random() * 10) + 1;
console.log("Número entero entre 1 y 10: " + numeroEntero10);

// Generar un número entero entre 1 y 1000
let numeroEntero1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número entero entre 1 y 1000: " + numeroEntero1000);
