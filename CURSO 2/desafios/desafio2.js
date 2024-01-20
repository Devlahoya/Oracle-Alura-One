// Función que calcula el índice de masa corporal (IMC)
function calcularIMC(altura, peso) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2); // Redondear el resultado a dos decimales
  }
  
  // Función que calcula el factorial de un número
  function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  // Función que convierte dólares a reales
  function convertirDolaresAReales(dolares) {
    const cotizacionDolar = 4.80;
    return dolares * cotizacionDolar;
  }
  
  // Función que muestra el área y perímetro de una sala rectangular
  function calcularRectangulo(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log("Área: " + area.toFixed(2) + " metros cuadrados");
    console.log("Perímetro: " + perimetro.toFixed(2) + " metros");
  }
  
  // Función que muestra el área y perímetro de una sala circular
  function calcularCirculo(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log("Área: " + area.toFixed(2) + " metros cuadrados");
    console.log("Perímetro: " + perimetro.toFixed(2) + " metros");
  }
  
  // Función que muestra la tabla de multiplicar de un número
  function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + (numero * i));
    }
  }
  
  console.log("IMC: " + calcularIMC(1.75, 70));
  console.log("Factorial de 5: " + calcularFactorial(5));
  console.log("Valor en reales: R$" + convertirDolaresAReales(50));
  calcularRectangulo(5, 8);
  calcularCirculo(3);
  tablaMultiplicar(7);
  