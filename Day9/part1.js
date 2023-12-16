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




function predictor (history, pred) {
  const newArr = [...history];
  const arr = [];
  const predicted = [pred]
  if (predicted[0] === undefined) {
    predicted[0] = [...history];
  }
  for (let i = 0; i < newArr.length - 1; i++) {
    arr.push(newArr[i] - newArr[i + 1]);
  }
  test.push(arr);
  predicted.push(arr);

  if (arr.every(x => x === 0)) {
    return predicted;
  }

  return predictor(arr, predicted);
}

const output = arrData.map(x => {
  const test = [];
  function predictor (history, pred) {
    const newArr = [...history];
    const arr = [];
    const predicted = [pred]
    if (predicted[0] === undefined) {
      predicted[0] = [...history];
    }
    for (let i = 0; i < newArr.length - 1; i++) {
      arr.push(newArr[i + 1] - newArr[i]);
    }
    test.push(arr);
    predicted.push(arr);
  
    if (arr.every(x => x === 0)) {
      return predicted;
    }
    return predictor(arr, predicted);
  }
  
  predictor(x);
  //console.log(test);
  test.reverse();
  const vals = []
  const extrapolated = test.reduce((acc, y) => {
    acc = acc + y[y.length - 1];
    vals.push(acc);

    return acc;
  },0)
  return vals;
})

console.log(output);
const final = output.map(x => {
  return x.reduce((acc, y) => {
    return acc += acc + y
  },0)
})
const finalFinal = final.reduce((acc, x) => {
  return acc += x;
},0)

console.log(finalFinal);









