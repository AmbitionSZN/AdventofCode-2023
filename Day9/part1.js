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

const test = [];

function predictor (history) {
  const arr = [];
  for (let i = 0; i < history.length - 1; i++) {
    arr.push(history[i] - history[i + 1]);
  }
  test.push(arr);
  if (arr.every(x => x === 0)) {

  }
  console.log(arr);
  predictor(arr);
}

predictor(arrData[0]);

