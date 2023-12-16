const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

const arrData = (() => {
  split = data.split(/\r\n/);
  return split.map(x => {
    const nums = (x.split(' '));
    for (let i = 0; i < nums.length; i++) {
      nums[i] = parseInt(nums[i]);
    }
    return nums;
  })
})();




function predictor (history) {
  const arr = [history];
  while (!arr[arr.length - 1].every(x => x === 0)){
    const newArr = [];
    const lastIndex = arr[arr.length - 1];
    for (let i = 0; i < lastIndex.length - 1; i++) {
      newArr.push(lastIndex[i + 1] - lastIndex[i]);
    }
    arr.push(newArr);
  }
  return arr;
}

const test = arrData.map(x => {
  const vals =  predictor(x);
  vals.reverse();
  return vals.reduce((acc, x) => {
    acc = acc + x[x.length - 1];
    return acc;
  },0);
  
},0);
const output = test.reduce((acc, x) => {
  acc = acc + x;
  return acc;
},0);
console.log(output);










