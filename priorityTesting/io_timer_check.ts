import fs from "fs"

//* Since io queue has priority than check queue and timer queue , and these queues run at defer of the io function so timeout and immediate will run after data.toString()
fs.readFile("./info.txt" , (err ,data) => {
    if(err){
        console.log(err)
    }
    console.log("Buffer data is: ", data);

    setTimeout(() => console.log("Set timeout is running"),0);
    setImmediate(() => console.log("Set immediate is running"));
    
    console.log(data.toString());
});
