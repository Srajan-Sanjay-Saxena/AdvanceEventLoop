import fs from "fs"


//* Accha baaki case mae , where delay is not zero , we know the execution order that firstly io will run and only after that setTimeout will run , which is explained in normalTimer_io.ts , here special behaviour isliye hai kyunki yaha 0 delay ki wjh se depending upon how busy is cpu kaam hota hai , kyunki actually minimum delay 10 milliseconds ka rehta hai not 0 bhale hi hamne 0 hi kyu na diya ho........ab maanlo cpu busy tha and usne task uthaye hi after 10 milliseconds have expired to is case mae to timer event ready hai to wo pahle execute hojyega , wrna io.....

fs.readFile("./info.txt" , (err , data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

setTimeout(() => console.log("hello") , 0)
for (let i=0 ; i<100000000 ; i++){

}