const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

const arrData = data.split(/\r\n\r\n/);
//console.log(arrData);

const almanac = arrData.map(x => {
  const arr = x.split(/:\r\n|:/);
  //console.log(arr);
  arr[1] = arr[1].split(/\r\n/);
  //console.log(arr);
  for (let i = 0; i < arr[1].length; i++) {
    arr[1][i] = arr[1][i].split(/ /);
    for (let j = 0; j < arr[1][i].length; j++) {
      arr[1][i][j] = parseInt(arr[1][i][j]);
    }
  }
  return arr;
})
console.log(almanac[1]);
