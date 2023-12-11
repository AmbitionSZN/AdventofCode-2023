const fs = require('fs');
const data = fs.readFileSync('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

const arrData = (() => { 
  const split = data.split(/\r\n/);
  const hands = split.map(x => x.split(' '));
  return hands.map(x => {
    x[0] = x[0].match(/./g);
    x[1] = parseInt(x[1]);
    x[0] = x[0].map(j => {
      switch (j) {
      case 'T':
        return '10';
      case 'J':
        return '11'
      case 'Q':
        return '12';
      case 'K':
        return '13';
      case 'A':
        return '14';
      default:
        return j;
      }
    })
    return x;
  });
})();
//console.log(arrData);


function handType(hand) {
  let count = 0;
  const arr = [];
  const newHand = [...hand];
  //sort cards highest to lowest
  newHand.sort((a, b) => {
    if (parseInt(a) < parseInt(b)) {
      return 1;
    }
    else if (parseInt(a) > parseInt(b)) {
      return -1;
    }
    else return 0
  })



  //store all matches in their own array
  for (let i = 0; i < newHand.length; i++) {
    if (newHand[i] !== newHand[i - 1]) {
      arr.push([newHand[i]]);
    } else arr[arr.length - 1].push(newHand[i]);
  }
 
  

  //return type of hand
  if (arr.length === 1) {
    return 7;
  } else if (arr.length === 2) {
    if (arr[0].length === 4 || arr[1].length === 4) {
      return 6;
    } else return 5;
  } else if (arr.length === 3) {
    if (arr.some(x => x.length === 3 )) {
      return 4
    } else return 3;
  } else if (arr.length === 4) {
    return 2;
  } else return 1;
}



function handComparison(firstHand, secondHand) {
  const handTypeOne = handType(firstHand);
  const handTypeTwo = handType(secondHand);

  if (handTypeOne > handTypeTwo) {
    return 1;
  } else if (handTypeOne < handTypeTwo) {
    return -1
  } else {
    for (let i = 0; i < firstHand.length; i++) {
      if (parseInt(firstHand[i]) > parseInt(secondHand[i])) {
        return 1;
      }  else if (parseInt(firstHand[i]) < parseInt(secondHand[i])) {
        return -1;
      }
    }
    return 0;
  }
}

const sortedHands = arrData.sort((a, b) => {
  return handComparison(a[0], b[0]);
});
const output = sortedHands.reduce((acc, x, index) => {
  acc += (index + 1) * x[1];
  return acc;
},0);

console.log(output);
