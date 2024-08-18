const http = require("http");
const { Worker } = require("worker_threads");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home page");
    } else if (req.url === "/slow") {
      const worker = new Worker("./worker.js");
      worker.on("message", (j) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`slow page ${j}`);
      });
    }
  })
  .listen(3000);
