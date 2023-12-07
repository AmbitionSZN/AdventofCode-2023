const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const arrData = data.split(/\n/);
let cards = 0;
//store matches and amount of each card


function gameScores (originalArray) {
  return originalArray.map((x, index, array) => {
  const replace = x.replace(/.*: /, '');
  const split = replace.split(/ \| |:/);
  const numArr = [];
  split.map(x => {
    const num = x.match(/[0-9][0-9]|[0-9]/g);
    numArr.push(num); 
  });
  const matches =  numArr[0].filter(x => {
    for (let i = 0; i < numArr[1].length; i++) {
      if (x === numArr[1][i]) {
        return true;
      }
    }
  });
    //console.log(matches);
  return [matches, 1];
  })
};
const matchesArr = gameScores(arrData);
for (let i = 0; i < matchesArr.length; i++) {
  if (matchesArr[i][0][0] !== 'undefined') {
    for (let k = 0; k < matchesArr[i][1]; k++){
      for (let j = 0; j < matchesArr[i][0].length; j++) {
        matchesArr[i + j + 1][1]++;
      }
    }
  }
}
console.log(matchesArr);
const output = matchesArr.reduce((acc, x) => {
  return acc += x[1];
}, 0)
console.log(output);