const { parentPort, workerData } = require("worker_threads");

console.log("Worker thread started");

const { start, end } = workerData;

let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

parentPort.postMessage({
  message: "Calculation completed",
  result: sum,
});
