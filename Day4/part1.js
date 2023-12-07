const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const arrData = data.split(/\n/);

//stores the point total of each game
const gameScores = arrData.map(x => {
  const array = x.replace(/.*: /, '');
  const arr = array.split(/ \| |:/);
  const numArr = [];
  arr.map(x => {
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
  let score = 0;
  for (let i = 0; i < matches.length; i++) {
    if (typeof matches[i] === 'string') {
        if (i >= 1) {
          score = score * 2;
        } else score++;
    }
  }
  return score;
});
scoreSum = gameScores.reduce((acc, x) => {
  return acc += x;
},0);
console.log(scoreSum);