// reverse a number
// function reverse(num)
// {
//     num=num+"";
//     return num.split("").reverse().join("")
// }

// console.log(reverse(1234));

// palindrome
// function palindrome(str){
//     const revStr=str.split("").reverse().join("");
//     if(str===revStr){
//         console.log("String "+str+" is palindrome");
//     }
//     else{
//         console.log("String "+str+" is not palindrome");
//     }
// }

// palindrome("ABC")

// function printCurrdateTime()
// {
//     const date=new Date();
//     const day=date.getDay();
//     const dayStr=['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     console.log("Today is "+ dayStr[day]);
//     const hour=date.getHours();
//     const minutes=date.getMinutes();
//     const seconds=date.getSeconds();
//     const AmPm=hour>=12?"PM":"AM";
//     console.log(hour+AmPm+":"+minutes+":"+seconds);
// }

// printCurrdateTime();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }).catch((error){
//     console.log(error);
// })
// Expected output: Array [3, 42, "foo"]

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo")
// //   setTimeout(resolve, 100, "foo")
// );

// Promise.allSettled([promise1, promise2]).then((results) =>
//   console.log(results)
// );

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
// Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// Expected output: "two"

// function resolved(result) {
//     console.log('Resolved');
//   }
  
//   function rejected(result) {
//     console.error(result);
//   }
  
//   Promise.reject(new Error('fail')).then(resolved, rejected);
  // Expected output: Error: fail
  
  