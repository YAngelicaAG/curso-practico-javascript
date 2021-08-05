// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}


// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código del Circulos


// const radioCirculo = 4;
// console.log("El radio del cítculo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del cítculo es: " + diametroCirculo + "cm");

const pi = Math.PI;
// console.log("PI es: " + pi);

// const perimetroCirculo = diametroCirculo * pi;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

function areaCirculo(radio) {
  return (radio * radio) * pi;
}

console.groupEnd();



function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputTrianguloLado1").value;
  const inputLado2 = document.getElementById("inputTrianguloLado1").value;
  const inputBase = document.getElementById("inputTrianguloLado1").value;

  const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTrianguloLado1").value;
  const altura = document.getElementById("inputTrianguloAltura").value;

  const area = areaTriangulo(inputBase, altura);
  alert(area);
}

function calcularDiametroCirculo() {
  const inputRadio = document.getElementById("inputRadioCircle").value;
  const diametro = diametroCirculo(inputRadio);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("inputRadioCircle").value;
  const perimetro = perimetroCirculo(inputRadio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputRadioCircle").value;
  const area = areaCirculo(inputRadio);
  alert(area);
}