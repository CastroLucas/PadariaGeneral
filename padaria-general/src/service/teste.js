
/***
 * Filter
 */

console.log('----------FILTER----------');
const numeros = [1,2,3,4,5,6,7,8,9,10,15,18,21,23,27,31,32,37,39,41,43,44,47,51,54,55,56];

function callbackFilter(valor){
    return valor >10;
};

const numerosFiltrados = numeros.filter(callbackFilter);
console.log('---numeros maiores que dez---');
console.log(numerosFiltrados);


let filterNumero = numeros.filter(n=>n%3===0);
console.log('---numeros multiplos de três---');
console.log(filterNumero);


/**
 * Map
 */


console.log('-----------MAP-----------');

console.log(numeros.map(n=>2*n));
console.log('-numeros-');
console.log(numeros);
