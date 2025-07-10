import fs from "fs"

//* The reason why setImmediate run first than readFile is that , during Io phase we have io polling going on , in which io is not finished completely , so the execution context moves to check phase where setImmediate is implemented

fs.readFile("./info.txt" , (err , data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
setTimeout(() => console.log("hello") , 0)
setImmediate(() => console.log("THis is setimmediate"));
// for (let i=0 ; i<100000000 ; i++){}