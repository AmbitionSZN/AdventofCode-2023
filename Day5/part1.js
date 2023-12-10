const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const arrData = data.split(/\r\n\r\n/);


const almanac = arrData.map(x => {
  const arr = x.split(/:\r\n|:/);
  arr[1] = arr[1].split(/\r\n/);
  for (let i = 0; i < arr[1].length; i++) {
    arr[1][i] = arr[1][i].split(/ /);
    for (let j = 0; j < arr[1][i].length; j++) {
      arr[1][i][j] = parseInt(arr[1][i][j]);
    }
  }
  return arr;
})


const seeds = almanac.shift();
seeds[1][0].shift();


function destinationNumber(sourceStart, destinationStart, rangeLength, source) {
  if (source >= sourceStart && source < sourceStart + rangeLength) {
    const dest = destinationStart + (source - sourceStart);
    return dest;
  } else return false;
}


const mappedSeeds = seeds[1][0].map(x => {
  let source = x;
  return almanac.map(x => {
    for (let i = 0; i < x[1].length; i++) {
      if(destinationNumber(x[1][i][1], x[1][i][0], x[1][i][2], source) !== false) {
        source = destinationNumber(x[1][i][1], x[1][i][0], x[1][i][2], source)
        return source;
      }
    }
    return source;
  })
})


let lowestLocation = mappedSeeds[0][6];


for (let i = 0; i < mappedSeeds.length; i++) {
  if (mappedSeeds[i][6] < lowestLocation) {
    lowestLocation = mappedSeeds[i][6];
  }
}
console.log(lowestLocation);





