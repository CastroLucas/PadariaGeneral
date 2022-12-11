function toCamelCase(str) {
  let string = str.split(/[_-]/);

  for (let index = 0; index < string.length; index++) {
    let temp = string[index].split('');
    temp[0] = temp[0].toUpperCase();
    string[index] = temp.join('');
  }
  string[0] = string[0].toLowerCase();
  return string.join('')
}
//console.log(toCamelCase("oi_lucas-goncalves"));

function pigIt(str) {
  let acentos = '!#,.;><()?'.split('');
  let array = str.split(' ');
  for (let index = 0; index < array.length; index++) {
    if (acentos.indexOf(array[index]) === -1) {
      let temp = array[index].split('');
      temp.push(temp[0]);
      temp.splice(0, 1)
      array[index] = temp.join('') + 'ay';
    }
  }
  return array.join(' ');
}
//console.log(pigIt('Pig latin is cool !'));

function reverseWords(str) {
  let array = str.split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split('').reverse().join('');
  }
  return array.join(' ');
}
// console.log(reverseWords('Lucas Goncalves'));

function calculate(sum) {
  // division($) => multiplication(*) => subtraction(-) => addition(+))
  var sinais = sum.split(/[1,2,3,4,5,6,7,8,9,0]/).filter(x => x.trim().length > 0).filter(x => x != '.');
  var numeros = sum.split(/[$,*,+,-]/);

  for (let i = 0; i < numeros.length; i++) {
    if (!numeros[i] || isNaN(numeros[i])) return '400: Bad request';
  }

  for (let i = 0; i < sinais.length; i++) {
    if (sinais[i] == '$') {
      numeros.splice(i, 2, Number(numeros[i] / Number(numeros[i + 1])));
      sinais.splice(i, 1);
      i--;
    }
  }

  for (let i = sinais.length - 1; i >= 0; i--) {
    if (sinais[i] == '*') {
      numeros.splice(i, 2, (Number(numeros[i]) * Number(numeros[i + 1])));
      sinais.splice(i, 1);
    }
  }

  let soma = Number(numeros[0]);
  for (let i = 0; i < sinais.length; i++) {
    if (sinais[i] == '-') {
      soma -= Number(numeros[i + 1]);
    } else if (sinais[i] == '+') {
      soma += Number(numeros[i + 1]);
    }
  }

  return soma;
}
// console.log(calculate('2+5*3.2$2-1'), '9');
// console.log(calculate('5$5$5$5'), '0.04');
// console.log(calculate('1000$2.5$5+5-5+6$6'), '81');
// console.log(calculate('5*6$2&5-10'), '400: Bad request');


function dirReduc(arr, key) {
  //			["NORTH", "SOUTH", "WEST", "EAST"],
  key = false;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH')) {
      arr.splice(i, 2);
      i--;
      key=true;
    } else if ((arr[i] === 'WEST' && arr[i + 1] === 'EAST') || (arr[i] === 'EAST' && arr[i + 1] === 'WEST')) {
      arr.splice(i, 2);
      i--;
      key=true;
    }
  }
  if (key === false) return arr;
  return dirReduc(arr, key);
}

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
