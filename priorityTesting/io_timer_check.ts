import fs from "fs"

//*these queues (check and timer) run at defer when executed inside io function so timeout and immediate will run after data.toString();
//* but inside io , setImmediate will run first always
fs.readFile("../info.txt" , (err ,data) => {
    if(err){
        console.log(err)
    }
    console.log("Buffer data is: ", data);
    for(let i=0 ; i<2000000 ; i++){}
    setTimeout(() => console.log("Set timeout is running"),0);
    setImmediate(() => console.log("Set immediate is running"));
    
    console.log(data.toString());
});
