const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const arrData = data.split(/\n/);

const matches = [];
arrData.map(x => {
  const array = x.replace(/.*: /, '');
  const arr = array.split(/ \| |:/);
  const numArr = [];
  //console.log(arr)
  arr.map(x => {
    const num = x.match(/[0-9][0-9]|[0-9]/g);
    numArr.push(num);
    
  })
  console.log(numArr[0]);
  for (let i = 0; i < numArr[0].length; i++) {
    for (let j = 0; j < numArr[1].length; j++) {
      if (numArr[0][i] === numArr[1][j]) {
        matches.push((x[0][i]));
      }
    }
  }
  //console.log(matches);
});