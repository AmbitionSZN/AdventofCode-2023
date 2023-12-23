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

function findLoop(startPosition) {
  const connections = [];
  const newStartPosition = [...startPosition]
  function checkPipeConnections(coords) {
    const y = coords[0];
    const x = coords[1];
    const pipe = grid[y][x];
    let count = 0;
    let bool = false;
    const yPlusOne = grid[y - 1][x] === '|' || grid[y - 1][x] === '7' || grid[y - 1][x] === 'F';
    const yMinusOne = grid[y + 1][x] === '|' || grid[y + 1][x] === 'L' || grid[y + 1][x] === 'J';
    const xPlusOne = grid[y][x + 1] === '-' || grid[y][x + 1] === '7' || grid[y][x + 1] === 'J';
    const xMinusOne = grid[y][x - 1] === '-' || grid[y][x - 1] === 'L' || grid[y][x - 1] === 'F';

    switch (pipe) {
      case '|':
        if (yPlusOne || yMinusOne) {
          count++;
        }
        if (grid[y - 1][x] === 'S' || grid[y - 1][x] === 'S') {
          bool = true;
        }
        break;
      case 'L':
        if (yPlusOne || xPlusOne) {
          count++;
        }
        if (grid[y - 1][x] === 'S' || grid[y][x + 1] === 'S') {
          bool = true;
        }
        break;
      case 'J':
        if (yPlusOne || xMinusOne) {
          count++;
        }
        if (grid[y - 1][x] === 'S' || grid[y][x - 1] === 'S') {
          bool = true;
        }
        break;
      case '-':
        if (xMinusOne || xPlusOne) {
          count++;
        }
        if (grid[y][x + 1] === 'S' || grid[y][x - 1] === 'S') {
          bool = true;
        }
        break;
      case '7':
        if (yMinusOne || xMinusOne) {
          count++;
        }
        if (grid[y][x - 1] === 'S' || grid[y - 1][x] === 'S') {
          bool = true;
        }
        break;
      case 'F':
        if (yMinusOne || xPlusOne) {
          count++;
        }
        if (grid[y - 1][x] === 'S' || grid[y][x + 1] === 'S') {
          bool = true;
        }
        break;
    }

    return (bool === true && count > 0);
  }
  if (checkPipeConnections([startPosition[0] + 1, startPosition[1]])) {
    connections.push([newStartPosition[0] + 1, newStartPosition[1]])
  }
  if (checkPipeConnections([newStartPosition[0] - 1, newStartPosition[1]])) {
    connections.push([newStartPosition[0] - 1, newStartPosition[1]])
  }
  if (checkPipeConnections([newStartPosition[0], newStartPosition[1] + 1])) {
    connections.push([newStartPosition[0], newStartPosition[1] + 1])
  }
  if (checkPipeConnections([newStartPosition[0], newStartPosition[1] - 1])) {
    connections.push([newStartPosition[0], newStartPosition[1] - 1])
  }
  return connections;
}

function pipes(coords, prevCoords)  {
  const y = coords[0];
  const x = coords[1];
  const pipe = grid[y][x];
  
  switch (pipe) {
    case '|':
      if (JSON.stringify(prevCoords) === JSON.stringify([y + 1, x])) {
        const nextCoord = [y - 1, x];
        return nextCoord;
      }
      else return [y + 1, x];
    case '-':
      if (JSON.stringify(prevCoords) === JSON.stringify([y, x - 1])) {
        return [y, x + 1];
      } else return [y, x - 1];
    case 'L':
      if (JSON.stringify(prevCoords) === JSON.stringify([y + 1, x])) {
        return [y, x + 1];
      } else return [y + 1, x];
    case 'J':
      if (JSON.stringify(prevCoords) === JSON.stringify([y + 1, x])) {
        return [y, x - 1];
      } else return [y + 1, x];
    case '7':
      if (JSON.stringify(prevCoords) === JSON.stringify([y - 1, x])) {
        return [y, x - 1];
      } else return [y - 1, x];
    case 'F':
      if (JSON.stringify(prevCoords) === JSON.stringify([y - 1, x])) {
        return [y, x + 1];
      } else return [y - 1, x];      
  }
}

console.log(findLoop(startPosition));
