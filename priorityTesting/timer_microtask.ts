setTimeout(() => console.log("this is first timeout"));
setTimeout(() => {
    console.log("this is second timeout");
    process.nextTick(() => console.log("this is next tick inside the second timeout"));
});

//* The next tick inside second timeout will run before the third timeout , this is actually the nature of our event loop in which the microtask queue cb are handled in between the timer queue execution.
setTimeout(() => console.log("this is third timeout"));

process.nextTick(() => console.log("This is process.nexttick 1"));

process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("This is the inner next tick inside next tick")
  );
});

process.nextTick(() => console.log("this is the process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

Promise.resolve().then(() => {
  console.log("this is Promise.revolve 2");
  process.nextTick(() => {
    console.log("this is the inner next tick inside Promise then block");
  });
}); 

Promise.resolve().then(() => console.log("this is Promise.resolve 3"));