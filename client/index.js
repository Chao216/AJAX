const btn = document.querySelector("button");

btn.onclick = () => {
  const xhr = new XMLHttpRequest(); // create a new XMLHTTPREQUEST object
  xhr.open("GET", "http://localhost:3000/server"); // set method, and url
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