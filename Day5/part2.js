const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
const locationsData = data.split(/\r\n\r\n/);


const almanac = locationsData.map(x => {
  const locations = x.split(/:\r\n|:/);
  locations[1] = locations[1].split(/\r\n/);
  for (let i = 0; i < locations[1].length; i++) {
    locations[1][i] = locations[1][i].split(/ /);
    for (let j = 0; j < locations[1][i].length; j++) {
      locations[1][i][j] = parseInt(locations[1][i][j]);
    }
  }
  return locations;
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


const locations = [];
//console.log(seeds[1][0])
  //determine range
  for (let i = 0; i < seeds[1][0].length; i++) {
    const start = seeds[1][0][i];
    const length = seeds[1][0][i + 1];
    let location = mappedSeeds[i][6];
    //console.log(location);
    i = i + 2;
    //check numbers in range
    for (let j = start; j < start + length; j++) {
      let source = j;
      const locations =  almanac.map(x => {
        for (let i = 0; i < x[1].length; i++) {
          if(destinationNumber(x[1][i][1], x[1][i][0], x[1][i][2], source) !== false) {
            source = destinationNumber(x[1][i][1], x[1][i][0], x[1][i][2], source)
            return source;
          }
        }
        return source;
      })
      if (locations[6] < location) {
        location = locations[6];
      }
    }
    locations.push(location)
  }


console.log(locations);

let output = locations[0];


for (let i = 0; i < locations.length; i++) {
  if (locations[i] < output) {
    output = locations[i];
  }
}
console.log(output);