/***
 * Filter
 */

console.log('----------FILTER----------');
//const numeros = [1,2,3,4,5,6,7,8,9,10,15,18,21,23,27,31,32,37,39,41,43,44,47,51,54,55,56];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function callbackFilter(valor) {
  return valor > 6;
};

const numerosFiltrados = numeros.filter(callbackFilter);
console.log('---numeros maiores que seis---');
console.log(numerosFiltrados);


let filterNumero = numeros.filter(n => n % 3 === 0);
console.log('---numeros multiplos de três---');
console.log(filterNumero);


/**
 * Map
 */

console.log('');
console.log('-----------MAP-----------');

console.log('---numeros vezes dois---');
console.log(numeros.map(n => 2 * n));



/**
 * Reduce >> array.reduce(function(acumulador, valor, indice, array))
 *
 * a função tbm pode receber um valor inicial para o acumulador
 */

console.log('');
console.log('----------Reduce---------');

let total = numeros.filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((soma, n) => soma + n, 0);

console.log(total);
