const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const split = data.split(/\r\n/);
arrData = split.map(x => {
  return x.match(/[0-9]+/g);
})


const arrWins = [];


for (let i = 0; i < arrData[0].length; i++) {
  let totalTime = parseInt(arrData[0][i]);
  const record = parseInt(arrData[1][i]);
  let speed = 0;
  let wins = 0
  let time = totalTime;
  
  for (let j = 0; j < totalTime; j++) {
    time--;
    speed++;
    const distTraveled = speed * time;
    if (distTraveled > record) {
      wins++;
    }
  }
  arrWins.push(wins);
}
const output = arrWins.reduce((acc, x) => {
  acc = acc * x;
  return acc;
})

console.log(output);