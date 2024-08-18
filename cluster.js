const cluster = require("cluster");
const http = require("http");

if (cluster.isPrimary) {
  console.log(`master running pid => ${process.pid}`);
  cluster.fork();
  cluster.fork();
} else {
  http
    .createServer((req, res) => {
      console.log(`worker running pid => ${process.pid}`);
      if (req.url === "/") {
        res.write("home page");
        res.end();
      } else if (req.url === "/slow") {
        for (let i = 0; i < 5000000000; i++) {}
        res.write("slow page");
        res.end();
      }
    })
    .listen(5000);
}
