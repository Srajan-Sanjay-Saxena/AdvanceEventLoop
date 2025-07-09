import fs from "fs"

console.log("Will be printed at first......");

fs.readFile("./info.txt" , (err ,data) => {
    if(err){
        console.log(err)
    }
    console.log("Buffer data is: ", data);    
    console.log(data.toString());
});

console.log("Will be printed at second......");