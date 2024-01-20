//Contador de 1 a 10 usando un bucle 'while':
let contador1 = 1;

while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}
//Contador de 10 a 0 usando un bucle 'while':
let contador2 = 10;

while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}
//Programa de cuenta regresiva pidiendo un número al usuario:
let limiteRegresivo = prompt("Ingrese un número para la cuenta regresiva:");
let contadorRegresivo = 0;

while (contadorRegresivo <= limiteRegresivo) {
  console.log(contadorRegresivo);
  contadorRegresivo++;
}
//Programa de cuenta progresiva pidiendo un número al usuario:
let limiteProgresivo = prompt("Ingrese un número para la cuenta progresiva:");
let contadorProgresivo = 0;

while (contadorProgresivo <= limiteProgresivo) {
  console.log(contadorProgresivo);
  contadorProgresivo++;
}