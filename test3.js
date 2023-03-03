// nodejs processing in ticks
console.log("Hello => number 1");

setTimeout(() => {
  console.log("The timeout running last => number 5");
}, 0);

setImmediate(() => {
  console.log("Running before the timeout => number 6");
});

let myvar = 0;

process.nextTick(() => {
  console.log("Running at next tick => number 3, myvar " + myvar);
  myvar = 2;
});

process.nextTick(() => {
    console.log("Running at next tick => number 4, myvar " + myvar);
    myvar = 3;
});

myvar = 1;

console.log("Hello => number 2");