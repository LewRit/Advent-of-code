const fs = require('fs');

fs.readFile('/Users/lewri/Projects/Advent-of-code/rps.txt', 'utf8', (err,data)=>{
    if (err){
        console.error(err);
        return;
    }

    const round=[0,1,2,3];
    console.log(round)
});