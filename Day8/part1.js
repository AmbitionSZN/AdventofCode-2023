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
  let index = network.findIndex(x => {
    return x[0] === 'AAA';
  });
  console.log(network);

  let node = network[index];
  let count = 0
  nextNode = ''
  console.log(node);
  let instructionIndex = 0;

  while (node[0] !== 'ZZZ') {
    
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
    console.log(node);
  }
  return count;
}

const output = networkNavigator(instructions, network);
console.log(output);
