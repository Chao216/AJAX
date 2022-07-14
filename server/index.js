import express from "express";

const app = express();

app.get("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // enabling cross-origin resource sharing
  res.send("Hello Ajax");
});
app.post("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // enabling cross-origin resource sharing
  res.send("Hello Ajax");
});

app.all("/json", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const man = {
    name: "Vova",
    age: 28,
    married: true,
  };
  const str = JSON.stringify(man);
  res.send(str);
});

app.get("/delay", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    res.send("this is delayed after 3 seconds");
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server startred on port" + port);
});
