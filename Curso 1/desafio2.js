// Desafío 1
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

// Desafío 2
let numero = prompt("Ingresa un número:");
if (numero > 0) {
  alert("El número es positivo.");
} else if (numero < 0) {
  alert("El número es negativo.");
} else {
  alert("El número es cero.");
}

// Desafío 3
let puntuacion = prompt("Ingresa tu puntuación en el juego:");
if (puntuacion >= 100) {
  alert("¡Felicidades, has ganado!");
} else {
  alert("Intenta nuevamente para ganar.");
}

// Desafío 4
let saldoCuenta = 500; // Supongamos que el saldo inicial es 500
alert(`Tu saldo actual es: $ ${saldoCuenta}`);

// Desafío 5
let nombreUsuario = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido, ${nombreUsuario}!`);