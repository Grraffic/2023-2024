// TASK 1
console.log("Hello World");
console.log("Hello World2");
console.log("Hello World3");
console.log("Hello World4");

// TASK 2
console.log("Function1");
console.log("Function2");
console.log("Function3");
console.log("Function4");

setTimeout(() => {
  console.log("function is fired");
}, 3000);

// TASK 3
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();

// // TASK 4
const getTodos = (callback) => {
  const request1 = new XMLHttpRequest();

  request1.addEventListener("readystatechange", () => {
    if (request1.readyState === 4 && request1.status === 200) {
      callback(request1.responseText);
    } else if (request1.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });
  request1.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request1.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// TASK 5
const getTodos1 = (callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(request.responseText);
      } else if (request.readyState === 4) {
        callback("Could not Fetch the Data", undefined);
      }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    request.send();
  });
};

getTodos1((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// //TASK 6
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("Resolved:", response);
    return data(response.json);
  })
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {});

// TASK 7
const getTodos2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

getTodos2()
  .then((data) => console.log("Resolved:", data))
  .catch((err) => console.log("rejected:", err));
