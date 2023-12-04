const util = require('util');
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

//console.log(arrData);
const numArr = []
const newNumArr = []

for (let i = 0; i < arrData.length; i++) {
    for (let j = 0; j < arrData[i].length; j++) {
      if (arrData[i][j].match(/[0-9]/) !== null) {
        numArr.push([i, j, arrData[i][j]]);

      }
    }
}
//console.log(numArr)
const test = [];
for (let i = 0; i < numArr.length; i++) {
  newNumArr.push(numArr[i]);
  const subArr = []
  subArr.push(numArr[i]);
  let bool = true;
  while (bool === true) {
    if (numArr[i + 1]?.[1] - 1 !== undefined && numArr[i][1] === numArr[i + 1]?.[1] - 1) {
      newNumArr.push(numArr[i + 1]);
      subArr.push(numArr[i + 1]);
      i++
  } else {
    bool = false;
    test.push(subArr);
  }
//todo: finish number groupings
  }  
}
const finalArr = [];
console.log(newNumArr);
for (let i = 0; i < test.length; i++) {
  const bool = test[i].some(x => {
    if (arrData?.[x[0] -1 ]?.[x[1]]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0] -1 ]?.[x[1]] !== undefined){
    //console.log(arrData?.[x[0] -1 ]?.[x[1]]?.match(/[\*=@&\/#%\+\$]/))
      return true;
    }
    else if (arrData?.[x[0] - 1]?.[x[1] + 1]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0] - 1]?.[x[1] + 1] !== undefined){
      //console.log(arrData?.[x[0] - 1]?.[x[1] + 1]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    }
    else if (arrData?.[x[0] + 1]?.[x[1]]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0] + 1]?.[x[1]] !== undefined){
      //console.log(arrData?.[x[0] + 1]?.[x[1]]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    }
    else if (arrData?.[x[0] + 1]?.[x[1] +1]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0] + 1]?.[x[1] +1] !== undefined){
      //console.log(arrData?.[x[0] + 1]?.[x[1] +1]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    }
    else if (arrData?.[x[0] - 1]?.[x[1] - 1]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0] - 1]?.[x[1] - 1] !== undefined){
      //console.log(arrData?.[x[0] - 1]?.[x[1] - 1]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    }
    else if (arrData?.[x[0]]?.[x[1] + 1]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0]]?.[x[1] + 1] !== undefined){
      console.log(arrData?.[x[0]]?.[x[1] + 1]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    }
    else if (arrData?.[x[0]]?.[x[1] - 1]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0]]?.[x[1] - 1] !== undefined){
      console.log(arrData?.[x[0]]?.[x[1] - 1]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    }
    else if (arrData?.[x[0] + 1]?.[x[1] - 1]?.match(/[\*=@&\/#%\+\$-]/) !== null && arrData?.[x[0] + 1]?.[x[1] - 1] !== undefined){
      console.log(arrData?.[x[0] + 1]?.[x[1] - 1]?.match(/[\*=@&\/#%\+\$]/))
      return true;  
    } else return false;
  })
  if (bool === true) {
    finalArr.push(test[i]);
  }
}
console.log(finalArr);
console.log(arrData[0 + 1][28]);
const nums = [];
finalArr.map(x => {
  const arr = [];
  const newArr = [];
  x.map(j => {
    arr.push(j[2]);
  })
  let num = arr.reduce((acc, x) => {
    acc = acc + x;
    return acc;
  },'');
  num = parseInt(num);
  nums.push(num);
});
console.log(util.inspect(nums, { maxArrayLength: null }));
const output = nums.reduce((acc, x) => {
  return acc + x
},0)
console.log(output);





