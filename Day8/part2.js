const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const arrData = data.split(/\r\n\r\n/);


const network = (() => {
  const split = arrData[1].split(/\r\n/);
  const nodes = split.map(x => {
    const node = x.match(/[A-Z][A-Z][A-Z]/g)
    return node;
  })
  return nodes;
})();
const instructions = (() => {
  const splitLetters = arrData[0].split('');
  const lettersToNums = splitLetters.map(x => {
    if (x === 'L') {
      return 1;
    } else return 2;
  })
  return lettersToNums;
})();



function networkNavigator(instructions, network) {
  let indexes = [];
  let nodes = network.filter((x, index) => {
     if (x[0].search(/[A-Z][A-Z]A/) !== -1) {
      indexes.push(index);
      return true;
     } else return false;
  });


  
  const stepsArr = [];

  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  for (let i = 0; i < nodes.length; i++) {
    let index = indexes[i];
    let node = network[index];
    let count = 0;
    let nextNode = '';
    let instructionIndex = 0;
  
    while (node[0].search(/[A-Z][A-Z]Z/) === -1) {
      count++;
      instructionIndex++
      if (instructionIndex > instructions.length) {
        instructionIndex = 1
      }
      nextNode = node[instructions[instructionIndex - 1]];
      //find index of nextnode
      index = network.findIndex(x => {
        return (nextNode === x[0]);
      });
      node = network[index];
    }
    stepsArr.push(count);
  }
  const primeFactors = [];


  for (let j = 0; j < stepsArr.length; j++) {
    const numberFactors = [];
    for (let i = 0; i < primes.length; i++) {
      //console.log(num / primes[i]);
      if (stepsArr[j] % primes[i] === 0) {
        numberFactors.push(stepsArr[j] / primes[i]);
        numberFactors.push(primes[i]);
      }
    }
    primeFactors.push(numberFactors);
  }

  let primeFactorsFlat = primeFactors.flat()
  primeFactorsFlat = primeFactorsFlat.filter((x, index) => {
    return primeFactorsFlat.indexOf(x) === index
  })

  return primeFactorsFlat.reduce((acc, x) => {
    acc *= x;
    return acc;
  })
}

const output = networkNavigator(instructions, network);
console.log(output);