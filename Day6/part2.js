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
  const match = x.match(/[0-9]+/g);
  const join =  match.join('');
  return parseInt(join);
})
console.log(arrData);

let totalTime = arrData[0];
const record = arrData[1];
let speed = 0;
let time = totalTime;
let wins = 0;
  
for (let j = 0; j < totalTime; j++) {
  time--;
  speed++;
  const distTraveled = speed * time;
  if (distTraveled > record) {
    wins++;
  }
}
console.log(wins);