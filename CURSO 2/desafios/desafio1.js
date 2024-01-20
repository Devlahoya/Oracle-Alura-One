// Función que muestra "¡Hola, mundo!" en la consola
function saludarMundo() {
    console.log("¡Hola, mundo!");
  }
  
  // Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola
  function saludarNombre(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  // Función que recibe un número como parámetro y devuelve el doble de ese número
  function dobleDeNumero(numero) {
    return numero * 2;
  }
  
  // Función que recibe tres números como parámetros y devuelve su promedio
  function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }
  
  // Función que recibe dos números como parámetros y devuelve el mayor de ellos
  function obtenerMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo
  function cuadradoDeNumero(numero) {
    return numero * numero;
  }
  

saludarMundo();
saludarNombre("Juan");
console.log(dobleDeNumero(5));
console.log(calcularPromedio(2, 4, 6));
console.log(obtenerMayor(8, 3));
console.log(cuadradoDeNumero(4));
