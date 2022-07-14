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

## AJAX post

server side

```javascript
app.post("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // enabling cross-origin resource sharing
  res.send("Hello Ajax");
});
```

clident side

```javascript
const box = document.getElementById("ajax");

box.addEventListener("mouseover", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/server");
  xhr.send("a=100&b=3000&c=10");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
        box.innerHTML = xhr.response;
      }
    }
  };
});
```

request body

you can write `xhr.send("a=12&b=13&c=17")`

## AJAX json data

in server side

```javascript
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
```

client side

manual parse

```javascript
let data = JSON.parse(xhr.response);
box.innerHTML = data.age;
```

to auto parse json

```javascript
const xhr = new XMLHttpRequest();
xhr.responseType = "json";

box.innerHTML = xhr.response.married;
```

## timeout and network error

server set a timeout timer

```javascript
app.get("/delay", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    res.send("this is delayed after 3 seconds");
  }, 3000);
});
```

client use

```javascript
xhr.timeout = 2000;
xhr.ontimeout = () => {
  alert("delayed");
};
xhr.onerror = () => {
  alert("network down");
};
```

## the `abort()` method

you just need to use

```javascript
const xhr = new XMLHttpRequest();
xhr.abort();
```
