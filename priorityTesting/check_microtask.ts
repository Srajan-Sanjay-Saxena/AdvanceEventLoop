setImmediate(() => console.log("this is first immediate"));
setImmediate(() => {
    console.log("this is second immediate")
    process.nextTick(() => console.log("this is next tick from inside second immediate"));
    Promise.resolve().then(() => console.log("this is promise from inside second immediate"));
});
setImmediate(() => console.log("this is first immediate"));