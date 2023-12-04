const fs = require('fs');

fs.readFile('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const textData = data;

  const arrData = textData.split(/\n/);

  const output = arrData.reduce((acc, x) => {
    const regex = /[0-9]|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/;
    
    let str = x;
    let letterNums = [];
    console.log(x);

    while (str.match(regex) != null) {
      const match = str.match(regex);
      str = str.replace(match[0], '');
      //console.log(match[0]);
      let test = match[0];
      letterNums.push(test);
    }

    function reverseString(str) {
        // Use split() to transform the string into an array of characters,
        // then reverse() to reverse the array, and finally join() to form a reversed string
        return str.split('').reverse().join('');
      }

    let reverseStr = reverseString(x);
    const reverseRegex = /[0-9]|(eno)|(owt)|(eerht)|(ruof)|(evif)|(xis)|(neves)|(thgie)|(enin)/
    let match = reverseStr.match(reverseRegex);
    reverseStr = match[0]
    reverseStr = reverseString(reverseStr);
    console.log(reverseStr);
    letterNums[letterNums.length - 1] = reverseStr;
    //console.log(letterNums);
    let newLetterNums = letterNums;
    console.log(newLetterNums);

    for (let i = 0; i < letterNums.length; i++) {
        switch(letterNums[i]) {
          case 'one':
            newLetterNums[i] = '1';
            break;
          case 'two':
            newLetterNums[i] = '2';
            break;  
          case 'three':
            newLetterNums[i] = '3';
            break; 
          case 'four':
            newLetterNums[i] = '4';
            break; 
          case 'five':
            newLetterNums[i] = '5';
            break; 
          case 'six':
            newLetterNums[i] = '6';
            break; 
          case 'seven':
            newLetterNums[i] = '7';
            break; 
          case 'eight':
            newLetterNums[i] = '8';
            break;  
          case 'nine':
            newLetterNums[i] = '9';
            break; 
          default:
            break;
        }
    }

    console.log(newLetterNums);
    let newNum = ''
    if (newLetterNums.length > 1) {
        console.log(newLetterNums[0] + newLetterNums.slice(-1));
        newNum = newLetterNums[0] + newLetterNums.slice(-1);
    } else {
        newNum = newLetterNums[0] + newLetterNums[0];
        console.log(newNum);
    }
    return acc + parseInt(newNum);
    
  },0)
  console.log(output);
});