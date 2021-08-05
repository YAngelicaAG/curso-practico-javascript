function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  if(numero % 2 === 0) {
    return true
  }
  else {
    return false 
  }
}

function calcularMediana(listaM) {

  //Ordenar array en orden ascendente
  const newList = listaM.sort(
    function(a,b){
      return a - b
    }
  );

  const mitadLista = parseInt(newList.length / 2);

  let mediana;

  if(esPar(newList.length)) {
    const elemento1 = newList[mitadLista - 1];
    const elemento2 = newList[mitadLista];
  
    const mediana = calcularMedia([
      elemento1,
      elemento2,
  ]);

    return mediana;
  
  } else {
    mediana = newList[mitadLista];

    return mediana;
  }

}


