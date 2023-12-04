const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return data;
  });
const arrData = data.split(/\n/);

for (let i = 0; i < arrData.length; i++) {
    arrData[i] = arrData[i].split('');
}

console.log(arrData);
const numArr = []
const newNumArr = []

for (let i = 0; i < arrData.length; i++) {
    for (let j = 0; j < arrData[i].length; j++) {
      if (arrData[i][j].match(/[0-9]/) !== null) {
        numArr.push([i, j, arrData[i][j]]);

      }
    }
  console.log(numArr)
}

for (let i = 0; i < numArr[i].length; i++) {
  newNumArr.push(numArr[i])
  if (numArr[i][1] === numArr[i][1] - 1) {
    newNumArr.push(numArr[i + 1]);
    i++
//todo: finish number groupings
  }  
}




