
console.log("Will be printed at first......");

process.nextTick(() => console.log("This is going to run prior to promise"));
Promise.resolve("hello man").then(data => console.log(data))

console.log("Will be printed at second......");

