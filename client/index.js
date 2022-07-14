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

const box = document.getElementById("ajax");

box.addEventListener("mouseover", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/server");
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
        box.innerHTML = xhr.response;
      }
    }
  };
});
