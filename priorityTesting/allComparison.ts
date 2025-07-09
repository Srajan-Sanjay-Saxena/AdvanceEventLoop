import * as fs from 'fs';

console.log('Start');

// First async operation - setTimeout
setTimeout(() => {
    console.log('Timer 1 executed');
}, 0);

// I/O operation with process.nextTick inside
fs.readFile('info.txt', 'utf8', (err, data) => {
    // Schedule a nextTick inside I/O callback
    process.nextTick(() => {
        console.log('NextTick inside I/O executed');
    });
    
    console.log('I/O callback executed');
});

// Another async operation - setTimeout
setTimeout(() => {
    console.log('Timer 2 executed');
}, 0);

// Promise microtask
Promise.resolve().then(() => {
    console.log('Promise microtask executed');
});

console.log('End');