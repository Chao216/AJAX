# AJAX

## AJAX get

setup for server

```javascript
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
```

setup for client

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <script src="./index.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <button>send request</button>
    <div id="ajax"></div>
  </body>
</html>
```

```css
#ajax {
  width: 300px;
  height: 200px;
  border: solid 1px black;
}
```

```javascript
const btn = document.querySelector("button");

btn.onclick = () => {
  const xhr = new XMLHttpRequest(); // create a new XMLHTTPREQUEST object
  xhr.open("GET", "http://localhost:3000/server?a=100&b=200&c=3000"); // set method, and url
  xhr.send(); // send request
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      // readyStatus 4 means done
      if (xhr.status === 200 || xhr.status === 304) {
        //200 304 means ok
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.getAllResponseHeaders());
        console.log(xhr.response);
      }
    }
  };
};
```
