const list1 = [
  1,
  2,
  3,
  2,
  4,
  5,
  4,
  4,
  3,
  7,
  6,
];

const listaCount = {};

list1.map(
  function (elemento) {
    
    if(listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
);

const listaArray = Object.entries(listaCount).sort(
  function (valorAcumulado, NuevoValor) {
    return valorAcumulado[1] - NuevoValor[1];
  }
);

const moda = listaArray[listaArray.length - 1];

