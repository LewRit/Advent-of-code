const fs = require('fs');

fs.readFile('/Users/lewri/projects/Advent-of-code/elfcalorie.txt', 'utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    const elves=[];
    const lines = data.split("\n");
    var calorie = 0
    for (let i=0; i<lines.length; i++){
        const line=lines[i];
        if (line === '') {
            elves.push(calorie);
            calorie = 0;
        }
        else {
            calorie += parseInt(line)
        }
    }
    const top=[];
    total=0
    for (let i = 0; i < 3; i++){
        value = Math.max(...elves)
        top.push(value)
        elves.splice(elves.indexOf(value),1)
        total += value;
    };
    console.log(total);
});
