const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

const grid = data.split(/\r\n/);


function findStartPosition(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'S') {
        return [i, j];
      }
    }
  }
  return false;
}
const startPosition = findStartPosition(grid);
console.log(startPosition);

function pipes(pipe, coords, prevCoords)  {
  switch (pipe) {
    case '|':
      
      
  }
}
