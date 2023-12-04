const fs = require('fs');

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
  const newArr = {
    'red': '0',
    'green': '0',
    'blue': '0'
  };
  console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(newArr.red) < parseInt(arr[i].red)) {
        newArr.red = arr[i].red;
    }
    if (parseInt(newArr.green) < parseInt(arr[i].green)) {
        newArr.green = arr[i].green
    }
    if (parseInt(newArr.blue) < parseInt(arr[i].blue)) {
        newArr.blue = arr[i].blue
    }
  }
  
  const power = newArr.red * newArr.green * newArr.blue;
  console.log(power);
  console.log(newArr);
  

  return acc += power
},0)
console.log(output);