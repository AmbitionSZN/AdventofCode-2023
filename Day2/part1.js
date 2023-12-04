const fs = require('fs');

const cubes = {
    'red': 12,
    'green': 13,
    'blue': 14
};
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

const arrData = data.split(/\n/);

const output = arrData.reduce((acc, x, index) => {
  const arr = [];
  const sets = x
    .split(';');

  sets[0] = sets[0].replace('Game ' + (index + 1) + ':', '');
  sets.map(x => {
    const pairs = x.split(',');
    console.log(pairs);
    const objData = {}
    for (let i = 0; i < pairs.length; i++) {
        const key = pairs[i].match(/(blue)|(green)|(red)/g);
        const value = pairs[i].match(/[0-9]+/g);
        objData[key] = value[0];
      }
    arr.push(objData);
  })
  const bool = arr.every(x => {
    console.log(1)
    console.log(x);
      if (x.green > cubes.green || x.red > cubes.red || x.blue > cubes.blue) {
        return false;
      } else return true
  })
  if (bool) {
    acc += (index + 1);
  }
  return acc
},0)
console.log(output);

