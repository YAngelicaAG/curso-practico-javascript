//Helper/utils
function esPar(num) {
  return (num % 2 === 0);
}

function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//calculadora de mediana
function medianaSalariosCol(lista){
  //quitar decimales y saca la mitad del array
  const mitad = parseInt(lista.length / 2);

  if(esPar(lista.length)){
    //va a la posición de la mitad y le resta 1
    const personaMitad1 = lista[mitad - 1];
    //va a la posición de la mitad
    const personaMitad2 = lista[mitad];
    //calcula la media aritmetica
    const mediana = calcularMedia([personaMitad1, personaMitad2]);

    return mediana;

  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// Mediana general
const salariosCol = colombia.map(
  //iterar cada elemento del array
  function(personita){
    //en cada aiteración trae el salario de cada persona
    return personita.salary;
  }
);

const salarioColSorted = salariosCol.sort(
  function(salarioA, salarioB) {
    return salarioA - salarioB;
  }
);

const medianaGeneralCol = medianaSalariosCol(salarioColSorted);

//Mediana top 10
const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;
const salariosColTop10 = salarioColSorted.splice(
  spliceStart, 
  spliceCount
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);


console.log(
  medianaGeneralCol,
  medianaTop10Col,
);