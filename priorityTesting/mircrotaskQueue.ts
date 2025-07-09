//* Let's understand the workflow of the below code , what will happen is that as soon as async tasks are encountered , they will be handle by libuv module , where below all the async tasks are handled by microtask queue.

//* So firstly as first async cb is encountered it moves to mt queue and scheduled , second encountered-->scheduled in mt,third encountered --> scheduled in mt, fourth encountered --> scheduled in mt, fifth encountered --> scheduled in mt, sixth encountered --> scheduled in mt.

//* Now first will run , second will run --> scheduling the inner process.tick , third will run , and then scheduled one of process.nextTick will run.

//* Similarly first promise will run , second promise will run scheduling the inner next tick in next tick queue , but since the execution context is inside the promise queue so 3rd promise will run adn after that next tick queue last scheduled one will run.


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