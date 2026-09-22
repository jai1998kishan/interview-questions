/*

In Node.js, a worker usually means a Worker Thread—a separate thread that can run JavaScript code independently from the main Node.js thread.

Node.js normally executes JavaScript on one main thread. This is excellent for I/O operations such as APIs, databases, and file access, but a heavy CPU task can block that thread.



*/

const { Worker } = require("worker_threads");

console.log("Main thread started");

const worker = new Worker("./worker.js", {
  workerData: {
    start: 1,
    end: 1000000000,
  },
});

worker.on("message", (result) => {
  console.log("Result received from worker:");
  console.log(result);
});

worker.on("error", (error) => {
  console.error("Worker error:", error);
});

worker.on("exit", (code) => {
  if (code !== 0) {
    console.log(`Worker stopped with exit code ${code}`);
  } else {
    console.log("Worker finished successfully");
  }
});

console.log("Main thread can continue doing other work");
