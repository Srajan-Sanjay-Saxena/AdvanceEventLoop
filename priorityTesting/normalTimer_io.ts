import fs from "fs"
//**The order of execution of the task queue
// 1. Timers (setTimeout, setInterval)
// Pending Callbacks
// Idle/Prepare
// **Poll** (I/O like fs.readFile)
// Check (setImmediate)
// Close Callbacks 
//  */

//* yaha below bhi lagega although timers have higher priority than io , but the thing is that execution order upar likha hua hai , jaise hi setTimeout aata hai , waise hi schedule to hojata hai wo task queue ,but wo ready nahi hota because of dealay time, to jaise jaise execution aage badhta hai waise waise execution hota hai , accha IO wale mae koi delay nahi isliye execution saath ke saath hojata hai...

setTimeout(() => console.log("hello") , 1000)
fs.readFile("./info.txt" , (err , data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
