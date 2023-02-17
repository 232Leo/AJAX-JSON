// HTTP Requests

// JavaScript is one thread that goes down and Async tells Java to hold to code for a set amount of time.

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log('callback function fired')
// }, 2000);

// console.log(3);
// console.log(4);

// - make HTTP request to get data from another server

// - We make these requests to API endpoints

// const request = new XMLttpResquest();

// request.addEventListener('readystatechange', () => {
//   //console.log(request, request.readyState);
//   if(request.readyState === 4){
//     console.log(request.responseText);
//   }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

// Status Codes

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   //console.log(request, request.readyState);
//   if(request.readyState === 4 && request.status === 200){
//     console.log(request, request.responseText);
//   }
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send();

// Callback Functions

// const request = new XMLHttpRequest();

// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', () => {
//   if(request.readyState === 4 && request.status === 200){
//     callback(undefined, request.responseText);
//   } else if(request.readyState === 4){
//     callback('could not fetch data', undefined);
//   }
// });

//   request.open('GET', 'https//jsonplaceholder.typicode.com/todos/')
//   request.send();
// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//   console.log('callback fired')
//   if(err){
//     console.log(err);
//   } else {
//     consoel.log(data);
//   }
// });

// console.log(3);
// console.log(4);

//Using JSON Data




