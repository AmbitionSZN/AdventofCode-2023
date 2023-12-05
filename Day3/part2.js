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

const numArr = [];
const symbolArray = [];

//store numbers and coordinates in array
for (let i = 0; i < arrData.length; i++) {
  for (let j = 0; j < arrData[i].length; j++) {
    if (arrData[i][j].match(/[0-9]/) !== null) {
      numArr.push([i, j, arrData[i][j]]);
    }
  }
}

//store symbols and coordinates in array
for (let i = 0; i < arrData.length; i++) {
  for (let j = 0; j < arrData[i].length; j++) {
    if (arrData[i][j].match(/[\*=@&\/#%\+\$-]/) !== null) {
      symbolArray.push([i, j, arrData[i][j]]);
    }
  }
}
//store every set of numbers
const test = [];
for (let i = 0; i < numArr.length; i++) {
  const subArr = []
  subArr.push(numArr[i]);
  let bool = true;
  while (bool === true) {
    if (numArr[i + 1]?.[1] - 1 !== undefined && numArr[i][1] === numArr[i + 1]?.[1] - 1) {
      subArr.push(numArr[i + 1]);
      i++
    } else {
      bool = false;
      test.push(subArr);
    }
  }
}

const filteredNums = [];
for (let i = 0; i < symbolArray.length; i++) {
  let count = 0;
  const filter = test.filter(x => {
    for (let j = 0; j < x.length; j++) {
      if (symbolArray[i][0] - 1 === x[j][0] && symbolArray[i][1] === x[j][1]) {
        count++;;
        return true;
      }
      if (symbolArray[i][0] - 1 === x[j][0] && symbolArray[i][1] + 1 === x[j][1]) {
        count++;
        return true;
      }
      if (symbolArray[i][0] + 1 === x[j][0] && symbolArray[i][1] === x[j][1]) {
        count++;
        return true;
      }
      if (symbolArray[i][0]  + 1 === x[j][0] && symbolArray[i][1] + 1 === x[j][1]) {
        count++;
        return true;
      }
      if (symbolArray[i][0] - 1 === x[j][0] && symbolArray[i][1] - 1 === x[j][1]) {
        count++;
        return true;
      }
      if (symbolArray[i][0] === x[j][0] && symbolArray[i][1] + 1 === x[j][1]) {
        count++;
        return true;
      }
      if (symbolArray[i][0] === x[j][0] && symbolArray[i][1] - 1 === x[j][1]) {
        count++;
        return true;
      }
      if (symbolArray[i][0] + 1 === x[j][0] && symbolArray[i][1] - 1 === x[j][1]) {
        count++;
        return true;
      }
    }
  })
  if (count >= 2) {
    const arr = []
    filter.map(x => {
      const num = x.reduce((acc, x) => {
        acc = acc + x[2];
        return acc;
      },'')
      arr.push(parseInt(num));
    })
    filteredNums.push(arr[0] * arr[1]);
  } 
}
const output = filteredNums.reduce((acc, x) => {
  acc = acc + x;
  return acc;
},0)

console.log(output);