const http = require("http");
const next = require("next");

const port = process.env.PORT || 10000;
const host = "0.0.0.0";

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      handle(req, res);
    })
    .listen(port, host, () => {
      console.log(`Ready on http://${host}:${port}`);
    });
});
