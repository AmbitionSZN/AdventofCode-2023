const fs = require('fs');

fs.readFile('puzzleinput.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const textData = data;
  
  console.log(textData.split(/\n/));

  const arrData = textData.split(/\n/);

  const output = arrData.reduce((acc, x) => {
    const num = x.match(/[0-9]/g);
    let newNum = ''
    
    console.log(num);
    if (num.length > 1) {
        console.log(num[0] + num.slice(-1));
        newNum = num[0] + num.slice(-1);
    } else {
        newNum = num[0] + num[0];
        console.log(newNum);
    }
    return acc + parseInt(newNum);
    
  },0)
  console.log(output);
});



