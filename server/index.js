import express from "express";

const app = express();

app.get("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // enabling cross-origin resource sharing
  res.send("Hello Ajax");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server startred on port" + port);
});
