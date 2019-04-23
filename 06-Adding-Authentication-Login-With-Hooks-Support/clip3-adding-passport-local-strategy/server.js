const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app1 = next({ dev });
const handle = app1.getRequestHandler();

app1
  .prepare()
  .then(() => {
    const app = express();

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
